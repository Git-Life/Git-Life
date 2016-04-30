import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SearchResults from'../components/searchresults';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import CommitItems from './../components/commit_items';

class App extends Component {
  render(){
    return (
      <div className="splashPage">
        <div>
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
          <SearchResults results={this.props.results}/>
        </div>
        <div className="commits">
          <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    commitData: state.commitData
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
