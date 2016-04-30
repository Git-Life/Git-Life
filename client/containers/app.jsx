import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SearchResults from'../components/searchresults';
import SplashRepos from './container_splash_repos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import CommitItems from '../components/commititems';
import WiredResults from '../components/wiredResults';
import UserResults from './userResults';

class App extends Component {
  render(){
    return (
      <div className="splashPage">
        <div>
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
          <UserResults results={this.props.results} />
          <SearchResults results={this.props.results}/>
        </div>
        <div className="commits">
          <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
        </div>
        <WiredResults searchData={this.props.actions.searchData} dataResults={this.props.dataResults} wired={this.props.actions.searchWired} wiredResults={this.props.wiredResults}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    repos: state.splashRepos,
    commitData: state.commitData,
    wiredResults: state.wiredResults,
    dataResults: state.dataResults
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
