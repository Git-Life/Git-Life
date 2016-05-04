import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  populateResults(){

    if(this.props.repo.data){
      console.log(this.props.repo.data);
      return this.props.repo.data.description;
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
