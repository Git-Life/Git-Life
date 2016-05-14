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
  componentWillMount(){
    $(document).ready(function(){
       $('.parallax').parallax();
     });
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
        <div className="parallax-container">
          <div className="parallax"><img src="./github.jpg"></img></div>
          <h1 className="parallaxHeader">Gitlyfe</h1>
          <h2 className="parallaxHeader2">A better way to search GitHub</h2>
        </div>
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
