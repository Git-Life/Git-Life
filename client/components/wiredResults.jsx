import React, {Component} from 'react';
import {reduce} from 'lodash';
import WiredItem from './wiredItem';


export default class WiredResults extends Component {

  constructor(props) {
    super(props);
    console.log("got in here")
    this.populateResults = this.populateResults.bind(this);
  }

  populateResults(){
    console.log("this got called tbh", this.props.wiredResults)
    return reduce(this.props.wiredResults.data, (accum, item, key) => {
      let html =(
        <WiredItem key={key} title={item.title}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div>
      News!
      {this.populateResults()}
      </div>
    );
  }
}
