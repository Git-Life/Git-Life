import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  componentWillReceiveProps(){
    if(this.props.repo.data){
      this.setState({name: this.props.repo.data.name});
    }

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
        {this.state.name}
      </div>
  );
  }
}
