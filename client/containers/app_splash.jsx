import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SplashRepos from './container_splash_repos';
import RepoSearchResults from '../components/reposearchresults';
import OrgVis from '../components/orgvis';
import TrendingNewRepos from '../components/trendingnewrepos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import CommitItems from '../components/commititems';
import WiredResults from '../components/wiredResults';
import test from '../styles/style.css';


  // <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
class AppSplash extends Component {
  render(){
    return (
      <div>
      
      <div className="section">
          <OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>
          <SplashRepos getSplashRepos={this.props.actions.getSplashRepos} repos={this.props.repos}/>
          <WiredResults hnresults={this.props.hnResults} searchHN={this.props.actions.searchHN} searchData={this.props.actions.searchData} dataResults={this.props.dataResults} wired={this.props.actions.searchWired} wiredResults={this.props.wiredResults}/>
          <TrendingNewRepos getNewRepos={this.props.actions.getNewRepos} newRepos={this.props.newRepos} />
          <TrendingNewOrgs getNewOrgs={this.props.actions.getNewOrgs} newOrgs={this.props.newOrgs} />
        </div>
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
    hnResults: state.hnResults,
    orgs: state.orgs,
    newRepos: state.newRepos,
    newOrgs: state.newOrgs
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSplash);
