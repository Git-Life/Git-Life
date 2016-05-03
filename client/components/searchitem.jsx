import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (
      <div className='collection-item'>
        <p><a href={this.props.repoUrl}>{this.props.description}</a></p>
        <p><a href={this.props.issuesUrl}>{this.props.issues}</a></p>
      </div>
    );
  }
}
