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
          <div className="repolist card-panel" >
          <div className="topRepoSection">
            <p className="num" >{key + 1 + "."}</p>
            <li className="repoName"  key={curr.html_url} > <a style={{fontWeight:'bold'}} href={curr.html_url}>{curr.name.toUpperCase() + "\t " }</a></li>
            <p className="stars"> {curr.stargazers}</p>
            <img className="stars" src="./rate-star-button.png"></img>
            <p className="lang">{curr.language}</p>
            <p>{curr.description}</p>
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
        <ul className="topRepoSection" >
          <h5 >Top Repositories</h5>
          <div ></div>
          {this.populateResults()}
        </ul>
    </div>
    );
  }
}
