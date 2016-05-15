import React, {Component} from 'react';
import Axios from 'axios';

export default class IssueItem extends Component{
  constructor(props){
    super(props);
    this.state = {predictedDifficulty: 'Difficulty'};
  }

  componentWillMount(){
    this.checkDifficulty();
  }

  sendTeach(difficulty){
    Axios.post('/learn/teach',{
      issue: this.props.issue,
      difficulty: difficulty
    })
    .then((res) => {
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
      this.setState({predictedDifficulty: res.data});
    })
    .catch((res)=>{
      console.log('err in checkDifficulty', err);
    });
  }

  render(){
    return (
      <li className='collection-item' >
        <div>
          <span><a href={this.props.issue.html_url} target='_blank'>{this.props.issue.title}</a> </span>
          <span className='chip'>{this.state.predictedDifficulty}</span>
          <button
            onClick={()=>{this.sendTeach('easy')}}
            className="secondary-content waves-effect waves-light btn black white-text">
            Easy
          </button>
          <button
            onClick={()=>{this.sendTeach('medium')}}
            className="secondary-content waves-effect waves-light btn black white-text">
            Medium
          </button>
          <button
            onClick={()=>{this.sendTeach('hard')}}
            className="secondary-content waves-effect waves-light btn black white-text">
            Hard
          </button>

        </div>
      </li>
    );
  }
}
