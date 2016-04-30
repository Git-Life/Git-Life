import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SearchResults from'../components/searchresults';
import SplashRepos from './container_splash_repos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render(){
    return (
      <div>
        <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
        <SearchResults results={this.props.results}/>
        <SplashRepos repos={this.props.repos} getSplashRepos = {this.props.actions.getSplashRepos}/>
          <RaisedButton
              label="Super Secret Password"
              primary={true}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
