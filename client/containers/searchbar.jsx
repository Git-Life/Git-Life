import _ from 'lodash';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  handleSearch(value){
    this.props.onSearchTermChange(value);
    this.props.onRequest(value);
  }
  render() {
    return(
      <div >
          <input
            onChange={(event) => {this.handleSearch(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={()=>{this.handleSearch(this.state.searchTerm);}}>Search</button>
      </div>
    );
  }
}
