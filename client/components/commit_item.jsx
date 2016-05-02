import React, {Component} from 'react';
// this is how I want each commitItem to be displayed
// the data avail to me is set at commit_items.jsx
export default class CommitItem extends Component{
  render(){
    return (
      <div>
        <p>Time of Commit: {this.props.commitTime} <a href={this.props.repo_url}> {this.props.repo_url} </a></p>
        <p>{this.props.tags}</p>
        <br />
      </div>
    );
  }
}
