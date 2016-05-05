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
    console.log(this.props);
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
        {this.getIssues()}
        {this.state.repo.name}
      </div>
  );
  }
}
