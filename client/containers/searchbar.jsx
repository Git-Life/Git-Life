import {reduce} from 'lodash';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {searchTerm: ''};
    console.log("constructor",this.props.searchTerm)
  }

  handleSearch(value){
    this.props.onSearchTermChange(value);
    this.setState({searchTerm: value});
    this.props.onRequest(value);

  }

  // to reduce requests during development,
  // temporarily only search on button click
  // disable onChange to input box
/*
  render() {
    return(
      <div >
          <input
            onChange={(event) => {this.handleSearch(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>Search</button>
    </div>
    );
*/
  // searches on button click only
  render() {
    return(
      <div >
         <input placeholder="Search GitHub" />
         <button onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>Search</button>
    </div>
    );
  }
}
