module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}

// ,
//     require('cssnano') Если надо будет сжать файл css