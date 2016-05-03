import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SplashRepos from './container_splash_repos';
<<<<<<< a711525e9b8420c848cfff56f46b046810801619
import RepoSearchResults from '../components/reposearchresults';
import OrgSearchResults from '../components/orgsearchresults';
=======
>>>>>>> Feat: removed results components from front page
import OrgVis from '../components/orgvis';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import CommitItems from '../components/commititems';
import WiredResults from '../components/wiredResults';
import UserResults from './userResults';
import test from '../styles/style.css';

class App extends Component {
  render(){
    return (
      <div className="splashPage">
          <SplashRepos getSplashRepos={this.props.actions.getSplashRepos} repos={this.props.repos}/>
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
<<<<<<< a711525e9b8420c848cfff56f46b046810801619
          <UserResults results={this.props.results} />
          <RepoSearchResults results={this.props.results}/>
          <OrgSearchResults results={this.props.results} />
=======
>>>>>>> Feat: removed results components from front page
          <OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>
          <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
        <WiredResults hnresults={this.props.hnResults} searchHN={this.props.actions.searchHN} searchData={this.props.actions.searchData} dataResults={this.props.dataResults} wired={this.props.actions.searchWired} wiredResults={this.props.wiredResults}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    repos: state.splashRepos,
    orgs: state.orgs,
    commitData: state.commitData,
    wiredResults: state.wiredResults,
    dataResults: state.dataResults,
    hnResults: state.hnResults
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
