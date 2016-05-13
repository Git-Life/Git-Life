import React, {Component} from 'react';

export default class HNItem extends Component{
  render(){
    return (
      <div className="newsArticle">
        <li ><i className="material-icons icon">trending_up</i><a href={this.props.link}>{this.props.title}</a></li>
      </div>
    );
  }
}
