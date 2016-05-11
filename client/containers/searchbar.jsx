import {reduce} from 'lodash';
import {debounce} from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';
import LanguageSelect from '../components/search_chooselanguage';

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
     window.location.href= "/#/search"
  }
  render() {
    return(
      <div >
      	<div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <form id="imaginary_container" onSubmit={this.onEnterPress}>
          <div className="input-group stylish-input-group">
          <input className="form-control" style={{margin:'auto', width:'50%', height:'100%'}}
            onChange={(event) => {this.handleChange(event.target.value)}}
            placeholder="Search GitHub" />
          <button  type='submit' onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}><Link to="search">Search</Link></button>
          </div>
      </form>
      </div>
    </div>
  </div>

    );
  }

};
