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
  onEnterPress(event){
    event.preventDefault();
    event.stopPropagation();
  }
  render() {
    return(

      <div className="input-field ">
        <form className="searchForm" onSubmit={this.onEnterPress}>
          <input style={{margin:'auto', width:'50%', height:'100%'}}
            onChange={(event) => {this.handleChange(event.target.value)}}
            placeholder="Search GitHub" />
          <button className="btn waves-effect waves-light" type='submit' onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}><Link to="search">Search</Link></button>
        </form>
      </div>

    );
  }

};
