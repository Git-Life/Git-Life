import React, {Component} from 'react';

export default class HNItem extends Component{
  render(){
    return (
      <div>
        <li><a href={this.props.link}>{this.props.title}</a></li>
      </div>
    );
  }
}
