module.exports = {
  plugins: [
    require('autoprefixer'), // Добавляет префиксы
    require('css-mqpacker'), // !!! более Не поддерживается. Выносит все миксины в конец файла стилей 
  ]
}

if (!process.env.NODE_ENV === 'development') { // Если сборка не Development, сжимаю css
  module.exports.plugins.push(
    require('cssnano')({ // Сжимает css
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })
  )
}

