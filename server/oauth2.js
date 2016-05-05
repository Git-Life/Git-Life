var OAuth = require('OAuth').OAuth2;
var OAuth2 = new OAuth(id, secret, 'https://github.com/login/oauth/authorize', 'https://github.com/login/oauth/access_token');

app.get('https://github.com/login/oauth/authorize', function(req, res){
  res.writeHead(303, {
      client_id: id,
      redirect_uri: 'http://localhost:8080/#/profile',
      scope: user, public_repo, user:email, user:follow, repo, notifications, gists, admin:org,
      state: 'xmcvntdjpfwratr90lc54',
      allow_signup: true
  });
  res.end();
});

app.get();
