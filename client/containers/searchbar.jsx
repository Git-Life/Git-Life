import _ from 'lodash';
import React, {Component} from 'react';
import Axios from 'axios';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchResults: []
    };

  }


  searchGit(value){
    var context = this;
    console.log(context);

    Axios.get('https://api.github.com/search/repositories', {
      params: {
        q: value
      }
    })
    .then(function(response){
      console.log(response);
      console.log(context);
      context.props.resultsPassed(response);

    })
    .catch(function(response){
        console.log("catch")

      console.log(response);
    });

  }
  handleSearch(value){
    this.searchGit(value);
    this.setState({"searchTerm":value});
    console.log("state", this.state.searchTerm);
  }
  render() {
    return(
      <div >
          <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.setState({searchTerm: event.target.value }, () =>{this.searchGit(this.state.searchTerm)});
            /*setTimeout((function() {
              console.log(this.state);
            }).bind(this), 100)*/
          }}
          placeholder="Search GitHub" />
        <button onClick={()=>{this.searchGit(this.state.searchTerm); }}>Search</button>

      </div>
    );
  }

/*
setTimeout((function() {
  console.log(this.state);
}).bind(this), 2000)
*/


}
SearchBar.propTypes = {
  resultsPassed: React.PropTypes.func,
};
