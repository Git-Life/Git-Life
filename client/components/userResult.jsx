import React, {Component} from 'react';

export default class UserResult extends Component{
  render(){
    return (
      <li className='collection-item  blue-grey lighten-5'>
        <div>
          <a
            target="_"
            href={this.props.url}>
            {this.props.name}
          </a>
          <span className='secondary-content'>
            {this.props.contributions} contributions in {this.props.count} repos.
          </span>
        </div>
      </li>
    );
  }
}
