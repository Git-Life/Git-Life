import React, {Component} from 'react';
import {reduce} from 'lodash';
import WiredItem from './wiredItem';


export default class WiredResults extends Component {

  constructor(props) {
    super(props);
    this.populateResults = this.populateResults.bind(this);
  }
  componentWillMount() {
     this.props.wired();
  }

  populateResults(){
    return reduce(this.props.wiredResults, (accum, item, key) => {
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
