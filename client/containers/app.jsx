import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import LanguageSelect from '../components/search_chooselanguage'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import test from '../styles/style.css';
import {IndexLink, Link} from 'react-router';
import $ from 'jquery';


  // <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
class App extends Component {
  render(){
    return (
      <div>
<<<<<<< 1f0a7af2e0f60e00337985ad1df44fea9dbca03e
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Gitlyfe</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to='/' activeClassName="active">Search</Link>
              </li>
              <li>
                <Link to='/trends'>Trends</Link>
              </li>
            </ul>
          </div>
        </nav>

=======
          <div >
            <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
            <LanguageSelect />
          </div>
>>>>>>> Style: Added minor styling
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
