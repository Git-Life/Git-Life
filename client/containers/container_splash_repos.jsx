import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SplashRepos extends Component {

  componentWillMount(){
    this.props.getSplashRepos();
  }

  getSplashRepos(){
    this.props.getSplashRepos();
  }

  populateResults(){
    //pull props repos data into state, then modify the array as needed and update state
    if(this.props.repos.data){
      return _.reduce(this.props.repos.data, (prev, curr)=>{
        let html = (
          <li className='collection-item'> {curr.name} {curr.lang} Commits today: {curr.commitsToday}</li>
        );
        prev.push(html);
        return prev;
      }, []);
    }


  }

  render() {
    return(
      <div >
        <ul className="collection">
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
