import React, {Component} from 'react';


export default class SearchItem extends Component{

  constructor(props){
    super(props);
  }

  selectARepo(){
    this.props.selectRepo(this.props.thisRepoIs);
    this.props.openModal();
  }

  render(){
    return (
      <div>
        <div
          className='collection-item'
          class="badge">
          <div>
            <a href='javascript:void(0)' onClick={()=>{this.selectARepo()}} >{this.props.name} </a>
            <span>{this.props.description}</span>
            <span style={{float: 'right'}}>{this.props.openIssues}</span>
          </div>
      </div>
    </div>
  );
  }
}
