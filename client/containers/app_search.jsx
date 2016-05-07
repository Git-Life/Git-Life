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
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
          <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
        <div class='section'>
          <UserResults  results={this.props.results} />
          <RepoSearchResults
            results={this.props.results}
            selectRepo={this.props.actions.selectRepo}/>
          <OrgSearchResults results={this.props.results} />
        </div>
        <div class='section'>
          <SelectedRepo
            repo={this.props.selectedRepo}
            issues={this.props.issues}
            getIssues={this.props.actions.getIssues}/>
        </div>
        
    </div>

    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    selectedRepo: state.selectedRepo,
    issues: state.issues
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSearch);
