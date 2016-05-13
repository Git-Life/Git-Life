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


class App extends Component {
  render(){
    return (
      <div>

        <nav>
          <div className="nav-wrapper blue-grey lighten-4">
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
