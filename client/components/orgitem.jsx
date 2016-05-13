import React, {Component} from 'react';

export default class OrgItem extends Component{
  render(){
    return (
      <li className='collection-item avatar valign-wrapper blue-grey lighten-5 ' >
        <img src={this.props.avatar_url} alt='org avatar' className='circle valign'/>
        <span
          className='title valign right-align'>
          <a
            className='title valign right-align'
            href={this.props.url}
            target='_blank'>
              {this.props.description}
          </a>
        </span>
      </li>
    );
  }
}
