import React, {Component} from 'react';

export default class UserResult extends Component{
  render(){
    return (
      <li className='collection-item  grey lighten-5' >
        <div>
          <a
            target="_"
            href={this.props.url}>
            {this.props.name}
          </a>
          <div className='secondary-content'>
            {this.props.contributions} contributions in {this.props.count} repos.
          </div>
        </div>
      </li>
    );
  }
}
