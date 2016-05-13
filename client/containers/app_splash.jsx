import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SplashRepos from './container_splash_repos';
import RepoSearchResults from '../components/reposearchresults';
import OrgVis from '../components/orgvis';
import TrendingNewRepos from '../components/trendingnewrepos';
import TrendingNewOrgs from '../components/trendingNewOrgs';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import CommitItems from '../components/commititems';
import WiredResults from '../components/wiredResults';
import test from '../styles/style.css';
import TrendsNav from '../components/trendsnav';


  // <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
class AppSplash extends Component {
  componentWillMount(){
    //get all data here to make faster
    this.props.actions.updateNavButton('topRepos');

  }

  render(){
    let repos = <SplashRepos getSplashRepos={this.props.actions.getSplashRepos} repos={this.props.repos}/>;
    let newRepos = <TrendingNewRepos getNewRepos={this.props.actions.getNewRepos} newRepos={this.props.newRepos} />;
    let newOrgs = <TrendingNewOrgs getNewOrgs={this.props.actions.getNewOrgs} newOrgs={this.props.newOrgs} />;
    let orgs = <OrgVis orgs={this.props.orgs} getTrendingOrgs={this.props.actions.getTrendingOrgs}/>;
    return (
      <div className="row">
        <div className="trendsNav col s3">
          <TrendsNav
            updateNavButton={this.props.actions.updateNavButton}
            navButton={this.props.navButton}
            />
        </div>
        <div className="splash col s4">
          {this.props.navButton == 'topRepos' ? repos : null}
          {this.props.navButton == 'topNewRepos' ? newRepos : null}
          {this.props.navButton == 'topOrgs' ? orgs : null}
          {this.props.navButton == 'topNewOrgs' ? newOrgs : null}
        </div>
        <div className="col s5">
          <WiredResults
            hnresults={this.props.hnResults}
            searchHN={this.props.actions.searchHN}
            searchData={this.props.actions.searchData}
            dataResults={this.props.dataResults}
            wired={this.props.actions.searchWired}
            wiredResults={this.props.wiredResults}/>
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
    newOrgs: state.newOrgs,
    navButton: state.navButton
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSplash);
