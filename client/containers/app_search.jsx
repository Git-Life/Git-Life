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
        <div className='section'>
          <SearchBar
            searchTerm={this.props.term}
            onRequest={this.props.actions.searchGitHub}
            onSearchTermChange={this.props.actions.updateSearchTerm}/>

        </div>

        <div className='section'>
          <UserResults  results={this.props.results} />
          <RepoSearchResults
            results={this.props.results}
            selectRepo={this.props.actions.selectRepo}
            selectedRepo={this.props.selectedRepo}
            issues={this.props.issues}
            getIssues={this.props.actions.getIssues}/>
          <OrgSearchResults results={this.props.results} />
        </div>
        <div className='section'>
          <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>
          <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
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
