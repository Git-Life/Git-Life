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
      <div className='row z-depth-1'>
        <span className='col s4'>
          <a href='javascript:void(0)'
            onClick={()=>{this.selectARepo()}} >
            {this.props.name}
          </a>
        </span>

        <span className='col s6 offset-s2'>
          Issues: {this.props.openIssues}
        </span>
      </div>
  );
  }
}
