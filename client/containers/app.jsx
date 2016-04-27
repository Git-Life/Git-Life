import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SearchResults from'../components/searchresults';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { results : []};
  }

  getSearchResults(response) {
    this.setState({'results': response.data.items});
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={this.props.actions.updateSearchTerm} resultsPassed={this.getSearchResults.bind(this)}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
