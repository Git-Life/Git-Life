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
import Categories from '../components/categories';

class AppSearch extends Component {

  componentWillMount(){
    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });
  }

  render(){
    return (
      <div >
        <div className='section search'>
          <SearchBar
            searchTerm={this.props.term}
            onRequest={this.props.actions.searchGitHub}
            onSearchTermChange={this.props.actions.updateSearchTerm}/>
        </div>
         <Categories
            results={this.props.results}
            searchTerm={this.props.term}
            onRequest={this.props.actions.searchGitHub}
            onSearchTermChange={this.props.actions.updateSearchTerm}/>

          {(this.props.results.length === 0 && this.props.term.length !== 0) ? (
            <div className="progress progressBar">
              <div className="indeterminate progressBar"></div>
            </div>) :
          null}
        <div className='section row'>
        {this.props.results.length !== 0 ?
          <div className='col s4 grey lighten-5'><UserResults  results={this.props.results} /> </div>  : <div id='searchbox' className="section scrollspy" style={{height: '500px'}}></div>}
        {this.props.results.length !== 0  ?
          <div className='col s4  grey lighten-5' > <RepoSearchResults
            results={this.props.results}
            selectRepo={this.props.actions.selectRepo}
            selectedRepo={this.props.selectedRepo}
            issues={this.props.issues}
            getIssues={this.props.actions.getIssues}/> </div> : null}
        {this.props.results.length !== 0  ?
          <div className='col s4  grey lighten-5'> <OrgSearchResults results={this.props.results} /></div> : null}
        </div>
    </div>

    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.term,
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
