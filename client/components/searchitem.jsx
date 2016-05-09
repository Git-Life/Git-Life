import React, {Component} from 'react';


export default class SearchItem extends Component{
  constructor(props){
    super(props);

  }

  selectARepo(){
    console.log(this.props.openModal);

    //this.props.selectRepo(this.props.thisRepoIs);
    this.props.openModal();
  }

  render(){
    return (
      <div>
      <button onClick={()=>{this.selectARepo()}}>Open Modal</button>

      <div
        className='collection-item'
        class="badge">
        <div>
          <a href={this.props.repoUrl} >{this.props.description}</a>
          <span style={{float: 'right'}}>{this.props.openIssues}</span>
        </div>

      </div>
    </div>
  );
  }
}
