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

          // <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
class App extends Component {
  render(){
    return (
<<<<<<< 4f2ce2ff86b553f80788438e38c547e743f7e856
      <div className="row">
          <SplashRepos getSplashRepos={this.props.actions.getSplashRepos} repos={this.props.repos}/>
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
<<<<<<< a711525e9b8420c848cfff56f46b046810801619
          <UserResults results={this.props.results} />
          <RepoSearchResults results={this.props.results}/>
          <OrgSearchResults results={this.props.results} />
=======
>>>>>>> Feat: removed results components from front page
          <OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>
          <SplashRepos repos={this.props.results} getSplashRepos={this.props.actions.getSplashRepos}/>
          <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
=======
      <div className="row" >
<<<<<<< 77a6de888367cfb8d6c06e7af021193233dc143c
    <p  style={{display:'block', textAlign: 'center', margin:'100px 100px 100px 100px'}} style={{display: 'inline-block', float:'center', width: '20%', height: '50%', fontWeight: 'bold'}}>What's Trending</p>
<SearchBar   searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
<OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>
>>>>>>> Feat: Basic styling for splash page
=======
        <SearchBar style={{margin:'100px 100px 100px 100px'}}  searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
        <p style={{fontWeight:'bold', display:'inline-block', textAlign: 'center', margin:'100px 100px 100px 100px'}} >What's Trending</p>
        <OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>
>>>>>>> Feat: Minor styles on search results page
        <WiredResults hnresults={this.props.hnResults} searchHN={this.props.actions.searchHN} searchData={this.props.actions.searchData} dataResults={this.props.dataResults} wired={this.props.actions.searchWired} wiredResults={this.props.wiredResults}/>
        <SplashRepos  getSplashRepos={this.props.actions.getSplashRepos} repos={this.props.repos}/>
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
