import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (

      <div
        className='collection-item'
        class="badge"
        onClick={()=>{this.props.selectRepo(this.props.thisRepoIs)}}
        >
        <div><a href={this.props.repoUrl} >{this.props.description}</a><a style={{float: 'right'}}>{this.props.issues}</a></div>

      </div>
  );
  }
}
