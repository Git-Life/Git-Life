import {reduce} from 'lodash';
import {debounce} from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router';

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
    console.log('this: ', this);
    this.setState({searchTerm: value});
  }

  handleKeyDown(e) {

    //let searchTerm = this.state.searchTerm
    let ENTER = 13;
    if( e.keyCode == ENTER ) {
        //this.updateValue();
        //this.handleSearch('react');
        console.log('ENTER key pressed. ', this);
    }
  }


  render() {
    return(
      <div className='inputSearch'>
        <input
          onChange={(event) => {this.handleChange(event.target.value)}}
          placeholder="Search GitHub" />
        <button class="btn waves-effect waves-light"  onClick={(event)=>{ this.handleSearch(this.state.searchTerm)}}><Link to="search">Search</Link></button>
      </div>
    );
  }

};
