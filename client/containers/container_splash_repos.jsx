import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SplashRepos extends Component {

  getSplashRepos(){
    this.props.getSplashRepos();
  }

  populateResults(){
    return _.reduce(this.props.repos.data, (prev, curr)=>{
      let html = (
        <li> {curr.name} {curr.lang} Commits today: {curr.commitsToday}</li>
      );
      prev.push(html);
      return prev;
    }, []);
  }

  render() {
    return(
      <div >
        <button onClick={(event)=>{ this.getSplashRepos(); console.log('inside container', this.props.repos) }}>fasdf</button>
        <ul>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
