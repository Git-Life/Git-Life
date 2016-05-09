import React, {Component} from 'react';
import SearchItem from './searchitem';

export default class RepoSearchResults extends Component {

  populateResults(){
    if(this.props.results.data){
      return _.reduce(this.props.results.data.items, (accum, item)=>{
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
    else{

    }
  }

  render() {
    return (
      <div className='collection' style={{display: 'inline-block',float:'left', width: '40%', height: '25%', margin: '20px 20px 20px 20px'}} >
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</p>
        {this.populateResults()}
      </div>
    );
  }
};
