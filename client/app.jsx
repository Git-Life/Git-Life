import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import SearchResults from'./components/searchresults';



class App extends Component {
  constructor(props){
    super(props);

    this.state = { results : []};
  }

  getSearchResults(response) {
    this.setState({'results': response.data.items});
  }

  render(){
    return (
      <div>
        <SearchBar resultsPassed={this.getSearchResults.bind(this)}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>

  , document.getElementById('app'));
