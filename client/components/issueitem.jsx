import React, {Component} from 'react';
import Axios from 'axios';

export default class IssueItem extends Component{
  constructor(props){
    super(props);
    this.state = {predictedDifficulty: 'Click to see predicted difficulty'};
  }

  sendTeach(difficulty){
    console.log(difficulty);
    Axios.post('/learn/teach',{
      issue: this.props.issue,
      difficulty: difficulty
    })
    .then((res) => {
      console.log('this was res', res);
    })
    .catch((res)=> {
      console.log('caught this res', res);
    });
  }
  checkDifficulty(){
    Axios.get('/learn/inquire', {
      params: {
        title: this.props.issue.title,
        body: this.props.issue.body,
        comments: this.props.issue.comments
      }
    })
    .then((res)=>{

    })
    .catch((res)=>{
      console.log('err in checkDifficulty', err);
    });
  }

  render(){
    return (
      <li className='collection-item' >
        <div>
          {this.props.issue.title}
          <a
            href="javascript:;"
            onClick={()=>{this.sendTeach('easy')}}
            class="secondary-content">
            Easy
          </a>
          <button
            onClick={()=>
              {this.checkDifficulty();}
            }>
            {this.state.predictedDifficulty}
          </button>
        </div>
      </li>
    );
  }
}
