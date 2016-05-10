import React, {Component} from 'react';

export default class UserResult extends Component{
  render(){
    return (
      <div className='collection-item' >
        <span><a href={this.props.html_url}>{this.props.name}</a>: {this.props.contributions} contributions in {this.props.count} repos. </span>
      </div>
    );
  }
}
