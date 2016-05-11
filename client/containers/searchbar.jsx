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

  componentDidMount() {
      $(document.body).on('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
      $(document.body).off('keydown', this.handleKeyDown);
  }

  handleSearch(value){
    this.props.onSearchTermChange(value);
    this.setState({searchTerm: value});
    this.props.onRequest(value);
  }

  handleChange(value){
    this.setState({searchTerm: value});
  }

  handleKeyDown(e) {

    //let searchTerm = this.state.searchTerm
    let ENTER = 13;
    if( e.keyCode == ENTER ) {
    }
  }


  render() {
    return(

      <div className="input-field ">
        <input   style={{margin:'auto', width:'50%', height:'100%'}}
          onChange={(event) => {this.handleChange(event.target.value)}}
          placeholder="Search GitHub" />
        <button
          className="btn waves-effect waves-light"
          onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>
          Search
        </button>
      </div>

    );
  }

};
