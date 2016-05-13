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
      <div className='row blue'>
        <div className=''>
            <form id="" onSubmit={this.onEnterPress}>
                <input
                  type='text'
                  className=""
                  onChange={(event) => {this.handleChange(event.target.value)}}
                  placeholder="Search GitHub" />
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}>
                    <Link to="search">Search</Link>
                </button>
                <LanguageSelect handleLanguageSelect={this.handleChildSelect} />
            </form>
        </div>
      </div>
    );
  }

};
