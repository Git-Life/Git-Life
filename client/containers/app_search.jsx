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
  constructor(props){
    super(props);
    this.state = {showResults: false};
  }
  componentWillMount(){
    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });
  }
  componentWillReceiveProps(props){
    if(props.results){
      this.setState({showResults: true});
    }
  }

  get spinner() {
    return (
      <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
    )
  }

  render(){
    console.log(this.props.results === [], '');
    console.log(this.props.searchTerm, 'hello')
    return (
      <div >
        <div className='section'>
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
        <div className='section row'>
        {this.state.showResults ?
          <div className='col s4 blue-grey lighten-4'><UserResults  results={this.props.results} /> </div>  : <div id='searchbox' className="section scrollspy" style={{height: '500px'}}></div>}
        {this.state.showResults ?
          <div className='col s4  blue-grey lighten-4' > <RepoSearchResults
            results={this.props.results}
            selectRepo={this.props.actions.selectRepo}
            selectedRepo={this.props.selectedRepo}
            issues={this.props.issues}
            getIssues={this.props.actions.getIssues}/> </div> : null}
        {this.state.showResults ?
          <div className='col s4  blue-grey lighten-4'> <OrgSearchResults results={this.props.results} /></div> : null}
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
