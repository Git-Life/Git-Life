import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (

      <div className='collection-item' class="badge">
        <div><a href={this.props.repoUrl} >{this.props.description}</a><a style={{float: 'right'}}href={this.props.issuesUrl}>{this.props.issues}</a></div>

      </div>
  );
  }
}
