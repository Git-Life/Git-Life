module.exports = {
  entry: './client/components/main.js',
  output: {
      path: './',
      filename: 'dist/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015' , 'react']
      }
    }]
  }
}
