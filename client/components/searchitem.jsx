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
      <li className='collection-item blue-grey lighten-4'>
        <span className='title'>
          <a href='javascript:void(0)'
            onClick={()=>{this.selectARepo()}} >
            {this.props.name}
          </a>
        </span>
        <span className='secondary-content'>
          Issues: {this.props.openIssues}
        </span>
        <p>{this.props.description}</p>


      </li>
  );
  }
}
