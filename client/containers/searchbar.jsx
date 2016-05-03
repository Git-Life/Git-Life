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
      <div style={{display: 'inline-block',float:'center', width: '50%', height: '50%'}}>
        <input
          onChange={(event) => {this.handleChange(event.target.value)}}
          placeholder="Search GitHub" />
        <button class="btn waves-effect waves-light" style={{display: 'block',float:'left'}} onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>Search</button>
      </div>
    );
  }

};
