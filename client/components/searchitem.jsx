import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (
      <div>
        <p><a href={this.props.repo_url}>{this.props.description}</a></p>
      </div>
    );
  }
}
