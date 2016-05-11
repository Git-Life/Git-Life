const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

const webpackConfig = {

  devtool: "cheap-module-source-map",
  entry: [path.resolve(ROOT_PATH, 'client/index.jsx')],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'window.$.velocity': 'velocity-animate/velocity.js'
    }),
  ],

};

if (process.env.NODE_ENV === 'development'){
  const webpackHMR = new webpack.HotModuleReplacementPlugin();
  webpackConfig.plugins.push(webpackHMR);
  webpackConfig.entry.push('webpack-hot-middleware/client');
}

if (process.env.NODE_ENV === 'production'){
  webpackConfig.devtool = 'source-map';
  const productionENV = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  });
  const webpackNoErrors = new webpack.NoErrorsPlugin();
  webpackConfig.plugins.push(webpackNoErrors, productionENV);
}

module.exports = webpackConfig;
