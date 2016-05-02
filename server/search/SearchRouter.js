var searchController = require('./SearchController.js');

module.exports = function (app) {
	// Different endpoints go here
	app.get('/repos', searchController.getRepos);
	app.get('/code', searchController.getCode);
	app.get('/issues', searchController.getIssues);
	app.get('/users', searchController.getUsers);

};
