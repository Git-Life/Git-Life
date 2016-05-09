import React, {Component} from 'react';
import IssueItem from '../components/issueitem';

export default class SelectedRepo extends Component{
  constructor(props){
    super(props)
    this.state = {repo: {}, issues: []}
  }
  componentWillReceiveProps(){
    if(this.props.repo.data){
      this.setState({repo: this.props.repo.data});
    }
  }

  getIssues(){
    this.props.getIssues(this.state.repo.issues_url);
  }

  populateResults(){
    var i = 0;
    if(this.props.issues.data){
      var reduceMe = this.props.issues.data.data.slice(0, 10);
      return _.reduce(reduceMe, (accum, item)=>{
        let html =(
          <IssueItem
            key={item.id}
            issue={item}
            />
        );
        accum.push(html);
        return accum;
      }, []);
    }
  }

  render(){
    return (
      <div>
        <button onClick={()=>{this.getIssues()}}>Get Issues</button>
        {this.state.repo.name}
        <ul className='collection'>
          {this.populateResults()}
        </ul>
      </div>
    );
  }
}
