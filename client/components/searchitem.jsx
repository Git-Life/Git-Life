import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
