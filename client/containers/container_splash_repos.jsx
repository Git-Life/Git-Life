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
          <div className="card-panel red accent-1 white-text" >
            <li  key={curr.html_url} > <a style={{fontWeight:'bold'}} href={curr.html_url}>{curr.name}</a></li>
            <p>{curr.description}</p>
            <p>{curr.lang} Commits today: {curr.commitsToday}</p>

          </div>
        );
        prev.push(html);
        return prev;
      }, []);
    }


  }

  render() {
    return(
      <div >

        <ul className="row"  style={{display: 'inline-block',float:'left', width: '25%'}}>
          <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</p>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
