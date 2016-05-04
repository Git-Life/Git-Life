import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import RepoSearchResults from'../components/reposearchresults';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import UserResults from './userResults';
import OrgSearchResults from '../components/orgsearchresults';
import SelectedRepo from '../components/repoview';

class AppSearch extends Component {
  render(){
    return (
      <div >
        <div>
          <SelectedRepo repo={this.state.selectedRepo}/>
        </div>
        <div class='section'>
          <UserResults  results={this.props.results} />
          <RepoSearchResults  results={this.props.results} selectRepo={this.selectRepo}/>
          <OrgSearchResults results={this.props.results} />
        </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    repos: state.splashRepos

  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSearch);
