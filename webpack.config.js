const path = require('path');
const fs = require('fs'); // Модуль для управления файлами
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

// Режим сборки необходимо задавать через консоль после каждой перезагрузки консоли:
// export NODE_ENV=development     // Заданно автамотически через cross-env
const isDev = process.env.NODE_ENV === 'development'; // определяем в каком режиме сбоки мы находимся
const isProd = !isDev; // Для удобства, переменная определяет находимся ли мы в production
console.log('Development mode:', isDev) // Вывожу в консоль чтобы видеть в каком режиме я нахожусь

// Объект для быстрого обращения к путям
const PATHS = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "dist") // Куда ложить: __dirname - корневая директория, dist - папка куда все сложить
};

// Путm к страницам, чтобы взять все страницы в формате pug
const PAGES_DIR = `${PATHS.src}/markup/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


// Функция которая сжимает css если isProd true
const optimization = () => {
    const config = { // если скрипты используют одну и туже библиотеку
        // splitChunks: { // webpack вынесет её в отдельный скрипт и подключит
        //     chunks: "all"
        // }
    }
    if (isProd) { // Если production то сжимает javascript код
        config.minimizer = [
            new TerserWebpackPlugin()
        ]
    }
    return config;
}

// Функция генерирует плагины
const plugins = () => {
    const base = [ // Базовые Плагины
        new CleanWebpackPlugin(), // чистит в папке dist файлы
        new CopyWebpackPlugin([ // просто копирует файлы
            {
                from: `${PATHS.src}/assets/img/favicon.ico`, // что - откуда
                to: `${PATHS.dist}/favicon.ico` // куда
            }
        ]),
        new MiniCssExtractPlugin({ // работа с файлами css
            filename: filename('[name]','css')
        }),
        ...PAGES.map(page => new HTMLWebpackPlugin({ // для работы с html и pug перебираю все страницы и пропускаю через HTMLWebpackPlugin
			template: `${PAGES_DIR}/${page}`, // точка входа, для HTML и PUG файлов
            filename: filename(`${page.replace(/\.pug/, '')}`,'html'), // костыль - имя, для HTML и PUG файлов
            minify: {
                collapseWhitespace: isProd // Опция сжимает html, если мод сборки production
            }
		})),
    ];
    if(isProd) {  // Если production то показывает карту размеров зависимостей
        base.push(new BundleAnalyzerPlugin())
    }
    return base;
}

// Функция собирает имя для файлов в зависимости от мода сборки
const filename = (name, ext) => isDev ? `${name}.${ext}` : `${name}.[hash].${ext}`;




module.exports = {
    entry: { // точки входа - объект
        index: ['@babel/polyfill', './src/index.js'], // точки входа 1 + полифил
        // index: ['./src/script/vendors/nouislider.js'], // точки входа 1 + полифил
    },
    output: {
        filename: filename('[name]','js'), // Имя файлов js на выходе
        path: PATHS.dist
    },
    resolve: {
        extensions: ['.js', '.css', '.scss', '.json'], // extension это окончания файлов, здесь мы говорим если не указан тип расширения при импорте, ищи с таким расширением
        alias: { // Это пути, которые можно записать в переменные, дабы сократить количество кода
            '@': PATHS.src
        }
    },
    optimization: optimization(),
    devServer: {  // Автоматическое обновление страницы
        port: 8081, // порт
        stats: 'errors-only' // выводит только ошибки
    },
    devtool: isDev ? 'source-map' : 'cheap-module-source-map', // Создаю source-map если development
    plugins: plugins(),
    module: { // Загрузчики-loder`ы, используются когда чтобы перевести один код в другой
        rules: [ // Загрузчики запускаются СПРАВА НАЛЕВО или СНИЗУ - ВВЕРХ
            {
                test: /\.js$/, // Если втретит js файлы
                exclude: /node_modules/, // Исключаем папку node_modules
                loader: { // Используем полифил для перевода в синтаксис ES5
                    loader: 'babel-loader',
                    options: { // Как именно будет запускаться babel-loader
                        presets: [ // Назначаем пресеты
                            '@babel/preset-env'
                        ],
                        plugins: [ // Используем плагин для новых возможностей, не добавленных в язык
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.css$/, // если встретит файлы с расширением .css
                use: [ // будет использовать следующее
                    {
                        loader: MiniCssExtractPlugin.loader, // вместо загрузчика style-loader использован метод класса, который можно настроить
                        options: {  // настройки: как именно будет запускаться loader
                            hmr: isDev, // Менять определённые сушности без перезагрузки страницы, если находимся в development
                            reloadAll: true
                        },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/, // Обработка файлов scss и sass
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    { // Постcss настроил отдельным файлом
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, 
                            config: {
                                path: './postcss.config.js'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/, 
                loader: 'pug-loader',
                options: {
                    pretty: isDev 
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/, 
                loader: 'file-loader', 
                options:{
                    name: filename('[name]','[ext]'),
                    // outputPath :  'images/', // Столкнулся с проблемой, проект собирается через раз
                }
            },
            {
                test: /\.(woff|ttf|woff2|eot)$/, // Обработка Шрифтов
                loader: 'file-loader', 
            },
        ]
    }
}