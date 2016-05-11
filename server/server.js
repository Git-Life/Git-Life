var express = require('express');
var history = require('connect-history-api-fallback');

var app = express();
app.use(history());
//don't use in prod
if(process.env.NODE_ENV !== 'production'){
  var webpack = require('webpack');
  var webpackConfig = require('../webpack.config');
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpackHot = require('webpack-hot-middleware');

  var compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    quiet: true,
    noInfo: true,
    stats: {
      colors: true,
      reasons: true
    },
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(webpackHot(compiler));
}


require('./middleware.js')(app, express);

module.exports = app;
