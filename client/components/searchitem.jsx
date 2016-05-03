import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (
        <li className='collection-item' class="badge"><a href={this.props.repoUrl}>{this.props.description}</a><a href={this.props.issuesUrl}>{this.props.issues}</a></li>
    );
  }
}
