import React, {Component} from 'react';
//blah
export default class SearchItem extends Component{
  render(){
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
