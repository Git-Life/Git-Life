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
      return _.reduce(this.props.repos.data, (prev, curr, key)=>{
        let html = (
          <div className="repolist" >
          <div >
            <p className="num" >{key + 1}</p>
            <li className="repoName"  key={curr.html_url} > <a style={{fontWeight:'bold'}} href={curr.html_url}>{curr.name.toUpperCase() + "\t " }</a></li>
            <p className="stars"> {curr.stargazers}</p>
            <p className="lang">{curr.language}</p>
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
      <div className="topRepoSection">
        <ul className="row"  style={{display: 'block',float:'right'}}>
          <h5 style={{fontWeight:'bold'}}>Top Repositories</h5>
          <div ></div>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
