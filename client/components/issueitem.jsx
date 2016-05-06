import React, {Component} from 'react';
import Axios from 'axios';

export default class IssueItem extends Component{
  sendTeach(difficulty){
    console.log(difficulty);
    axios.post('/learn/teach',{
      issue: this.props.issue,
      difficulty: difficulty
    })
    .then((res) => {
      console.log('this was res', res);
    })
    .catch((res)=> {
      console.log('caught this res', res);
    })
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
