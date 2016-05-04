import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  populateResults(){
    if(this.props.repo){
      return this.props.repo;
    }
    else{
      return "";
    }
  }

  render(){
    return (

      <div>
        This is where selectedRepo will go.
        {this.populateResults()}
      </div>
  );
  }
}
