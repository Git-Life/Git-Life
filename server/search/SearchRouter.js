var searchController = require('./SearchController.js');

module.exports = function (app) {
	//Different endpoints go here
	//app.post('/search', homecontroller.search);
	//app.get('/', homecontroller.serverTest);

	// new routes for
	app.get('/repos', searchController.getRepos);
	app.get('/code', searchController.getCode);
	app.get('/issues', searchController.getIssues);
	app.get('/users', searchController.getUsers);

};
