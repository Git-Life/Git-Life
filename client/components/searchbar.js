import _ from 'lodash';
import React, {Component} from 'react';
import Axios from 'axios';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      searchResults: []
    };
  }

  searchGit(value){
    var context = this;

    Axios.get('/search/repos', {
      params: {
        searchTerm: value
      }
    })
    .then(function(response){
      context.props.resultsPassed(response);
    })
    .catch(function(response){
      console.log("catch")
    });
  }

  handleSearch(value){
    this.searchGit(value);
    this.setState({"term":value});
  }

  render() {
    return(
      <div>
          <input
          value={this.state.term}
          onChange={(event) => {
            this.setState({ term: event.target.value });
          }}
          placeholder="Search GitHub" />
          <button onClick={ () => { this.searchGit(this.state.term); }}>Search</button>

      </div>
    );
  }
}

SearchBar.propTypes = {
  resultsPassed: React.PropTypes.func,
};
