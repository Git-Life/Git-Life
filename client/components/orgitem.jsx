import React, {Component} from 'react';

export default class OrgItem extends Component{
  render(){
    return (
      <div>
        <p><a href={this.props.url}>{this.props.description}</a></p>
      </div>
    );
  }
}