module.exports = ({ file, options }) => {
  return {
    plugins: {
      cssnano: {
        'zindex': false,
        'autoprefixer': false,
        'postcss-minify-gradients': false,
        'reduceIdents': false,
      },
      autoprefixer: {
        'grid': 'autoplace',
      }
    }
  }
}