Пути:  

Для картинок Pug - относительно файла в котором они подключаются через функцию   require('относительный путь').default  

Для картинок SCSS относительно файла последнего родителя(main) к которому они в итоге подключаются, тоесть начало у всех одинаковое.   
url(../assets/img/путь до картинки)

Вычесления:

em - использовать для медиа - запросов

rem - для шрифтов, для отступов padding и margin
  Базовый шрифт 100% то-есть 16px или 1rem

line-height - указываем множителем. Делим размер line-height который указан в макете, на font-size указаного в макете.   
  line-height 1.25;
