import React, {Component} from 'react';
import SearchItem from './searchitem';

export default class RepoSearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {sort: ''};
  }

  handleClick(sortBy) {
    this.setState({sort: sortBy});
  }

  constructHTML(data) {
    if(data){
      return _.reduce(data, (accum, item)=>{
        let html =(
          <SearchItem
            description={item.description}
            issues={"Open Issues: " + item.open_issues}
            issuesUrl={item.issues_url}
            repoUrl={item.clone_url}
            key={item.clone_url}
            thisRepoIs={item}
            selectRepo={this.props.selectRepo}
            />
        );
        accum.push(html);
        return accum;
      }, []);
    }
  }

  populateResults(sortBy){
    if(this.props.results.data){
      switch (sortBy){
        case 'name':
          var newArray = this.props.results.data.items.slice();
          return this.constructHTML(newArray.sort((a, b) =>{
            return a.description.localeCompare(b.description);
          }));
        break;
      case 'popularity':
        var newArray = this.props.results.data.items.slice();
        return this.constructHTML(newArray.sort((a, b)=>{
          return a.stargazers_count - b.stargazers_count;
        }));
        break;
      default:
        return this.constructHTML(this.props.results.data.items);
        break;
      }
    }
  }

  render() {
    return (
      <div  >
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</p>
        <button onClick={()=>{this.handleClick('name')}}>Alphabetically</button>
        <button onClick={()=>{this.handleClick('popularity')}}>Stargazer Count</button>
        {this.populateResults(this.state.sort)}
      </div>
    );
  }
};
