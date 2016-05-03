import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SplashRepos extends Component {

  getSplashRepos(){
    this.props.getSplashRepos();
  }

  populateResults(){
    return _.reduce(this.props.repos.data, (prev, curr)=>{
      let html = (
        <li className='collection-item'> {curr.name} {curr.lang} Commits today: {curr.commitsToday}</li>
      );
      prev.push(html);
      return prev;
    }, []);
  }

  render() {
    return(
      <div >
        <button onClick={(event)=>{ this.getSplashRepos(); }}>fasdf</button>
        <ul className="collection">
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
