import React, {Component} from 'react';

export default class CommitItem extends Component{
  render(){
    return (
      <div className="commitData">
        <p>Issue created At: {this.props.commitTime} <a href={this.props.repo_url}> {this.props.repo_url} </a></p>
        <p>Tags: {this.props.tags}</p>
        <br />
      </div>
    );
  }
}
