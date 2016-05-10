var path = require('path');
var bodyParser = require('body-parser');


module.exports = function(app, express) {
	var searchRouter = express.Router();
  var splashRouter = express.Router();
  var learnRouter = express.Router();

	app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, '../dist')));
  app.use('/search', searchRouter);
  app.use('/splash', splashRouter);
  app.use('/learn', learnRouter);

  require('./search/SearchRouter.js')(searchRouter);
  require('./splash/splashRouter.js')(splashRouter);
  require('./learn/learnRouter.js')(learnRouter);
};
