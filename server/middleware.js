var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
	var searchRouter = express.Router();

	app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, '../dist')));
  app.use('/search', searchRouter);

  require('./search/SearchRouter.js')(searchRouter);
};
