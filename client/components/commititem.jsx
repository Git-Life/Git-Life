import React, {Component} from 'react';
// the data avail to is set at commit_items.jsx
export default class CommitItem extends Component{
  render(){
    return (
        <li>Time of Commit: {this.props.commitTime} <a href={this.props.repo_url}> {this.props.repo_url} </a></li>
    );
  }
}
