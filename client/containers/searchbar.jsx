import _ from 'lodash';
import React, {Component} from 'react';
import Axios from 'axios';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
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
      console.error(response);
    });

  handleSearch(value){
    this.setState({"searchTerm":value});
    this.props.onSearchTermChange(value);
    console.log(this.state);
    // this.searchGit(value);

  }
  render() {
    return(
      <div >
        <form>
          <input
            onChange={(event) => {this.handleSearch(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={()=>{this.searchGit(this.state.searchTerm);}}>Search</button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  resultsPassed: React.PropTypes.func,
};
