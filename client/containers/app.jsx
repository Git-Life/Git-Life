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

    console.log(this.props.location.pathname);

    if(this.props.location.pathname === '/'){
      this.state = {search: 'active', trends: '', about: ''};
    } else if(this.props.location.pathname === '/trends'){
      this.state = {search: '', trends: 'active', about: ''};
    } else {
      this.state = {search: '', trends: '', about: 'active'};
    }
  }

  componentWillMount(){
    $(document).ready(function(){
       $('.parallax').parallax();
     });
  }

  changeTabs(event) {
    if(event.currentTarget.id === 'searchTab'){
      this.setState({search: 'active', trends: '', about: ''});
    }
    if(event.currentTarget.id === 'trendsTab'){
      this.setState({search: '', trends: 'active', about: ''});
    }
    if(event.currentTarget.id === 'aboutTab'){
      this.setState({search: '', trends: '', about: 'active'});
    }
  }
  // <a href="#" className="brand-logo right white-text" style={{color: "black"}}>GitLife</a>
  render(){

    return (
      <div>
        <nav>
          <div className="nav-wrapper black">
            <ul id="nav-mobile" className="left">
              <li id='searchTab' className={this.state.search} onClick={(event) => this.changeTabs(event)}>
                <Link to='/' activeClassName="active" className="white-text">Search</Link>
              </li>
              <li id='trendsTab' className={this.state.trends} onClick={(event) => this.changeTabs(event)}>
                <Link to='/trends' activeClassName="active" className="white-text">Trends</Link>
              </li>
              <li id='aboutTab' className={this.state.about} onClick={(event) => this.changeTabs(event)}>
                <Link to='/about' activeClassName="active" className="white-text">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="parallax-container">
          <div className="parallax"><img src="github.jpg"></img></div>
          <h1 className="parallaxHeader gitTitle" >GitLife</h1>
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
