var express = require('express');


var app = express();

// If using ES6 and WebPack comment out line 10
// app.use(webpackMiddleware(compiler, {
//   quiet: true,
//   noInfo: true,
//   stats: {
//     colors: true,
//     reasons: true
//   },
//   publicPath: webpackConfig.output.publicPath
// }));
// app.use(webpackHot(compiler));
// app.use(express.static(path.join(__dirname, 'es6Refactor/')));

require('./middleware.js')(app, express);

module.exports = app;