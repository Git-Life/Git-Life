import _ from 'lodash';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchResults: []
    };
  }

  handleSearch(value){
    this.props.onSearchTermChange(value);
    // this.searchGit(value);
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

SearchBar.propTypes = {
  resultsPassed: React.PropTypes.func,
};
