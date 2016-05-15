import {reduce} from 'lodash';
import {debounce} from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';
import LanguageSelect from '../components/search_chooselanguage';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      language: 'All'
    };

    this.handleChildSelect = this.handleChildSelect.bind(this);
  }
  handleSearch(value){
    var reqObj = {searchTerm: value, language: this.state.language};

    this.props.onSearchTermChange(value);
    this.setState({searchTerm: value});
    this.props.onRequest(reqObj);
    //console.log('reqObj: ', reqObj);
  }
  handleChange(value){
    this.setState({searchTerm: value});
  }
  onEnterPress(event){
     event.preventDefault();
     window.location.href= "/#/search"
  }

  handleChildSelect(event) {
    this.setState({language: event});
  }

  render() {
    return(
      <div className='container section'>
        <div className='row'>
          <div className='col s8 searchbar'>
            <input

              style={{height: "30px"}}
              type='text'
              onChange={(event) => {this.handleChange(event.target.value)}}
              placeholder="Search GitHub" />
          </div>
          <div className='col s2'>
            <a href="#searchbox"><button
              onClick={()=>{document.getElementById('searchbox').scrollIntoView();}}
              className="btn waves-effect waves-light  black"
              onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>
              Search
            </button></a>
          </div>
          <div className='col s2'>
            <LanguageSelect handleLanguageSelect={this.handleChildSelect} />
          </div>
        </div>
      </div>
    );
  }

};
