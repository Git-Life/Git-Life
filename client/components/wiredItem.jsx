import React, {Component} from 'react';

export default class WiredItem extends Component{
  render(){
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
