import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  constructor(props){
    super(props)
    this.state = {repo: {}, issues: []}
  }
  componentWillReceiveProps(){
    if(this.props.repo.data){
      this.setState({repo: this.props.repo.data});
    }
    if(this.props.issues.data){
      this.setState({issues: this.props.issues.data});
    }

  }

  getIssues(){
    this.props.getIssues(this.state.repo.issues_url);

  }

  populateResults(){

  }

  render(){
    return (

      <div>
        This is where selectedRepo will go.
        <button onClick={()=>{this.getIssues()}}>Get Issues</button>
        {this.state.repo.name}
      </div>
  );
  }
}
