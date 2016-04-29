import {reduce} from 'lodash';
import {map} from 'lodash';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {searchTerm: ''};
    console.log("constructor", this.props.searchTerm)
  }

  handleSearch(value){
    this.props.onSearchTermChange(value);
    this.setState({searchTerm: value});
    this.props.onRequest(value);

  }

  handleWired(){
    this.props.wired();
  }


  render() {
    return(
      <div >
          <input
            onChange={(event) => {this.handleSearch(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={(event)=>{ this.handleSearch(this.state.searchTerm); this.handleWired()}}>Search</button>

    </div>
    );
  }
}
