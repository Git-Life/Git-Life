import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SplashRepos extends Component {

  getSplashRepos(){
    this.props.getSplashRepos();
  }

  render() {
    return(
      <div >
        {this.props.repos}
        <button onClick={(event)=>{ this.getSplashRepos(); console.log('inside container', this.props.repos) }}>fasdf</button>
    </div>
    );
  }
}
