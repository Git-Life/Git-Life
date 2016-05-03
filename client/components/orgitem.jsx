import React, {Component} from 'react';

export default class OrgItem extends Component{
  render(){
    return (
      <div>
        <img className='imgOrg' src={this.props.avatar_url} alt='org avatar' />
        <div className='aOrg'><a href={this.props.url}>{this.props.description}</a></div>
      </div>
    );
  }
}