import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {searchTerm: ''};
    console.log("constructor", this.props.searchTerm)
  }

  handleSearch(value){
    this.props.onSearchTermChange(value);
    this.setState({searchTerm: value});
    this.props.onRequest(value);

  }

  getFeed(req, res){
    var feed = new Feed({
      title: 'Tech News',
      link: 'http://www.wired.com/feed/'
    });

    Post.findPosts(function(posts, err){
      if (err)
        res.send('404 Not Found', 404);
      else {
        for(var key in posts){
          feed.item({
            title: posts[key].title,
            link: posts[key].url
          });
        }
        res.set('Content-Type', 'text/xml');
        res.send(feed.render('rss-2.0'));
      }
    });
  }


  render() {
    return(
      <div >
          <input
            onChange={(event) => {this.handleSearch(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>Search</button>
    </div>
    );
  }
}
