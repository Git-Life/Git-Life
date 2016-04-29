import React, {Component} from 'react';
//blah
export default class SearchItem extends Component{
  render(){
    return (
      <div>
        <a href={this.props.repo_url}>{this.props.description}</a>
      </div>
    );
  }
}
