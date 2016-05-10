import React, {Component} from 'react';

export default class UserResult extends Component{
  render(){
    return (
      <div className='collection-item' >
<<<<<<< 0471253c32d8ef3d5d4f3074009bf54b8121adfc
        <span><a href={this.props.url} target='_blank'>{this.props.name}</a>: {this.props.contributions} contributions in {this.props.count} repos. </span>
=======
        <span><a href={this.props.html_url}>{this.props.name}</a>: {this.props.contributions} contributions in {this.props.count} repos. </span>
>>>>>>> Bug: User link now directing to correct user page
      </div>
    );
  }
}
