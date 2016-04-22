var app = require('./server/server.js');

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Gitalytics up and running on http://localhost:', port);
});