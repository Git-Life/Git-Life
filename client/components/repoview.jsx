import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  populateResults(){
    if(this.props.repo){
      return this.props.repo;
    }
    else(){
      return "";
    }
  }

  render(){
    return (

      <div>
        {this.populateResults()}
      </div>
  );
  }
}
