import React, {Component} from 'react';

export default class WiredItem extends Component{
  render(){
    return (
      <div>
        <p><a href={this.props.link}>{this.props.title}</a></p>
      </div>
    );
  }
}
