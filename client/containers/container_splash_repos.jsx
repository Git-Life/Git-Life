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

    if(this.props.repos.data){
      return _.reduce(this.props.repos.data, (prev, curr)=>{
        let html = (
          <li  className='collection-item' class="badge"> <a style={{fontWeight:'bold'}}>{curr.name}</a> {curr.lang} Commits today: {curr.commitsToday}</li>
        );
        prev.push(html);
        return prev;
      }, []);
    }


  }

  render() {
    return(
      <div >

        <ul className="collection" class="col s4" style={{display: 'inline-block',float:'left'}}>
          <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</p>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
