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
          <div className="card small col s3 m2" >
          <div  style={{ padding: '10px 10px 10px 10px'}}>
            <li   key={curr.html_url} > <a style={{fontWeight:'bold'}} href={curr.html_url}>{curr.name}</a></li>
            <p>{curr.stargazers}</p>
            <p>{curr.language}</p>
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
          <div ></div>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
