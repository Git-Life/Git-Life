import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  constructor(props){
    super(props)
    this.state = {repo: {}}
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
    console.log(this.props);
    if(this.props.repo.data){
      console.log(this.props.repo.data);
    }
    else{
      return "";
    }
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
