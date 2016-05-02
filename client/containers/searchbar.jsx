import {reduce} from 'lodash';
import {debounce} from 'lodash';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {searchTerm: ''};
  }

  handleSearch(value){

    this.props.onSearchTermChange(value);
    this.setState({searchTerm: value});
    this.props.onRequest(value);
  }

  handleChange(value){
    this.setState({searchTerm: value});
  }


  render() {
    return(
      <div >
        <input
          onChange={(event) => {this.handleChange(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>Search</button>
      </div>
    );
  }

};
