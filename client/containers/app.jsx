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
    constructor(props){
    super(props);

    this.state = {search: 'active', trends: ''};
  }

  changeTabs(event) {
    //console.log(event);
    console.log(event.currentTarget.id);
    if(event.currentTarget.id === 'searchTab'){
      this.setState({search: 'active', trends: ''});
    }
    if(event.currentTarget.id === 'trendsTab'){
      this.setState({search: '', trends: 'active'});
    }
  }

  render(){
    return (
      <div>

        <nav>
          <div className="nav-wrapper blue-grey lighten-4">
            <a href="#" className="brand-logo right" style={{color: "black"}}>Gitlyfe</a>
            <ul id="nav-mobile" className="left">
              <li id='searchTab' className={this.state.search} onClick={(event) => this.changeTabs(event)}>
                <Link to='/' activeClassName="active" style={{color: "black"}}>Search</Link>
              </li>
              <li id='trendsTab' className={this.state.trends} onClick={(event) => this.changeTabs(event)}>
                <Link to='/trends' style={{color: "black"}}>Trends</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
        <footer className='page-footer footer'>
          <Link to='/about'>About Us</Link>
        </footer>
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
