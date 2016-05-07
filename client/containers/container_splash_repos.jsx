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
          <div className="col s3 m4" >
          <div className="card small" style={{ padding: '10px 10px 10px 10px'}}>
            <li   key={curr.html_url} > <a style={{fontWeight:'bold'}} href={curr.html_url}>{curr.name}</a></li>
            <p>{curr.description}</p>
            <p>{curr.lang} Commits today: {curr.commitsToday}</p>
            <p>Stargazers: {curr.stargazers}</p>
            <p>Forks: {curr.forks}</p>
            <p>Language: {curr.language}</p>
          </div>
          </div>
        );
        prev.push(html);
        return prev;
      }, []);
    }


  }

  render() {
    return(
      <div className="section">
        <ul className="row"  style={{display: 'block',float:'right'}}>
          <h5 style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</h5>
          <div className="divider"></div>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
