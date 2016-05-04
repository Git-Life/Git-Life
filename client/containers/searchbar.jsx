import {reduce} from 'lodash';
import {debounce} from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';

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
        <input style={{margin:'auto', width:'50%', height:'100%'}}
          onChange={(event) => {this.handleChange(event.target.value)}}
          placeholder="Search GitHub" />
        <button class="btn waves-effect waves-light"  onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}><Link to="search">Search</Link></button>
      </div>
    );
  }

};
