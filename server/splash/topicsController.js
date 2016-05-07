var path = require('path');
var FeedParser = require('feedparser');
var request = require('request');

module.exports={

  getWiredFeed: function(req, res){
    var req = request('http://www.wired.com/category/gear/feed/'),
    feedparser = new FeedParser();
    req.on('error', function (error) {
    });
    req.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });
    feedparser.on('error', function(error) {
    });
      var results = [];

    feedparser.on('readable', function() {
      var stream = this
      var meta = this.meta
      while (item = stream.read()) {
        results.push(item);
      }
    });

    feedparser.on('end', ()=>{
      res.send(results);
    });

  },
  getDataFeed: function(req, res){
    var req = request('http://www.datatau.com/rss'),
    feedparser = new FeedParser();
    req.on('error', function (error) {
    });
    req.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });
    feedparser.on('error', function(error) {
    });
      var results = [];

    feedparser.on('readable', function() {
      var stream = this
      var meta = this.meta
      while (item = stream.read()) {
        results.push(item);
      }
    });

    feedparser.on('end', ()=>{
      res.send(results);
    });

  },


  getHNFeed: function(req, res){
    var req = request('https://news.ycombinator.com/rss'),
    feedparser = new FeedParser();
    req.on('error', function (error) {
    });
    req.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });
    feedparser.on('error', function(error) {
    });
      var results = [];

    feedparser.on('readable', function() {
      var stream = this
      var meta = this.meta
      while (item = stream.read()) {
        results.push(item);
      }
    });

    feedparser.on('end', ()=>{
      res.send(results);
    });

  },

  getGoogleFeed: function(req, res){
    var req = request('https://news.google.com/news?q=' + lemurs + '&output=rss'),
    feedparser = new FeedParser();
    req.on('error', function (error) {
    });
    req.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });
    feedparser.on('error', function(error) {
    });
      var results = [];

    feedparser.on('readable', function() {
      var stream = this
      var meta = this.meta
      while (item = stream.read()) {
        results.push(item);
      }
    });

    feedparser.on('end', ()=>{
      res.send(results);
    });
  }

  getGoogleFeed: function(req, res){
    var req = request('https://news.google.com/news?q=' + lemurs + '&output=rss'),
    feedparser = new FeedParser();
    req.on('error', function (error) {
    });
    req.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });
    feedparser.on('error', function(error) {
    });
      var results = [];

    feedparser.on('readable', function() {
      var stream = this
      var meta = this.meta
      while (item = stream.read()) {
        results.push(item);
      }
    });

    feedparser.on('end', ()=>{
      res.send(results);
    });
}
