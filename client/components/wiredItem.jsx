import React, {Component} from 'react';

export default class WiredItem extends Component{
  render(){
    return (
      <div className="newsArticle">
        <li><a href={this.props.link}>{this.props.title}</a></li>
      </div>
    );
  }
}
