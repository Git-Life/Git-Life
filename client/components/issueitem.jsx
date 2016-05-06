import React, {Component} from 'react';
export default class IssueItem extends Component{
  sendTeach(difficulty){
    console.log(difficulty);
  }

  render(){
    return (
      <li className='collection-item' >
        <div>
          {this.props.issue.title}
          <a
            href="#"
            onClick={()=>{this.sendTeach('easy')}}
            class="secondary-content">
            Easy
          </a>
        </div>
      </li>
    );
  }
}
