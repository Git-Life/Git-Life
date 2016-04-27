const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

const webpackConfig = {

  devtool: "cheap-module-source-map",
  entry: [path.resolve(ROOT_PATH, 'client/app.js')],
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins:
    commonConfig.plugins.concat([
      new webpack.IgnorePlugin(/react-addons/),
      new webpack.IgnorePlugin(/react-dom/),
      new webpack.optimize.OccurenceOrderPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    )
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
