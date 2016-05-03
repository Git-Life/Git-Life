/* This file now contains most of the code that was in app.jsx, */
/*   when our app had only this one (splash) page - and before we added routes.js */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import SearchBar from './searchbar';
import SplashRepos from './container_splash_repos';
import RepoSearchResults from'../components/reposearchresults';
import WiredResults from '../components/wiredResults';
import UserResults from './userResults';
import CommitItems from './../components/commitItems';
import OrgVis from '../components/orgvis';
import test from '../styles/style.css';



class Splash extends Component {
  render(){
    return (
      <h4>Splash Page</h4>
      <div className="splashPage">
        <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
        <UserResults results={this.props.results} />
        <RepoSearchResults results={this.props.results}/>
        <WiredResults hnresults={this.props.hnResults} searchHN={this.props.actions.searchHN} searchData={this.props.actions.searchData} dataResults={this.props.dataResults} wired={this.props.actions.searchWired} wiredResults={this.props.wiredResults}/>
        <SplashRepos getSplashRepos={this.props.actions.getSplashRepos} repos={this.props.repos}/>
        <OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>
        <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
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
    dataResults: state.dataResults,
    hnResults: state.hnResults
    orgs: state.orgs,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

