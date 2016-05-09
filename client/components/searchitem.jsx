import React, {Component} from 'react';


export default class SearchItem extends Component{
  constructor(props){
    super(props);
    
  }


  render(){
    return (
      <div>
      <button onClick={()=>{this.props.openModal()}}>Open Modal</button>

      <div
        className='collection-item'
        class="badge"

        >
        <div><a href={this.props.repoUrl} >{this.props.description}</a><a onClick={()=>{this.props.selectRepo(this.props.thisRepoIs)}} style={{float: 'right'}}>{this.props.issues}</a></div>

      </div>
    </div>
  );
  }
}
