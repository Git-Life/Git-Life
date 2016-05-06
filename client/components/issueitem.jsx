import React, {Component} from 'react';

export default class IssueItem extends Component{
  render(){
    return (
      <div className='collection-item' >
        <span><a href={this.props.url}>{this.props.name}</a>: {this.props.contributions} contributions in {this.props.count} repos. </span>
      </div>
    );
  }
}
