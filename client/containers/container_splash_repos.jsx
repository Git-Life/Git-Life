import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SplashRepos extends Component {

  getSplashRepos(value){
    this.props.getSplashRepos();
  }

  render() {
    return(
      <div >
        <button onClick={(event)=>{ this.getSplashRepos() }} Get Repos></button>
    </div>
    );
  }
}
