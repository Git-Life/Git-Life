import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import RepoSearchResults from'../components/reposearchresults';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import ChooseLanguage from '../components/search_chooselanguage';

class RepoSecondPage extends Component {
  render(){
    return (
      <div >
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
          <ChooseLanguage/>
          <RepoSearchResults  results={this.props.results}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,

  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSecondPage);
