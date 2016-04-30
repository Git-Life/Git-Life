import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SplashRepos extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  getSplashRepos(value){

  }

  render() {
    return(
      <div >
        <button onClick={(event)=>{ this.getSplashRepos() } }Get Repos></button>
    </div>
    );
  }
}
