import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import LanguageSelect from '../components/search_chooselanguage'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import test from '../styles/style.css';


  // <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
class App extends Component {
  render(){
    return (
      <div>
        <nav>
          <div className="nav-wrapper red accent-1">
            <div className="row">
              <div className="col s12">
                <ul className='tabs'>
                  <li className='tab col s3'>Test1</li>
                  <li className='tab col s3'>Test1</li>
                  <li className='tab col s3'>Test1</li>
                </ul>
              </div>
            </div>
            <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
            <LanguageSelect />
          </div>
        </nav>
        {this.props.children}
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
    orgs: state.orgs
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
