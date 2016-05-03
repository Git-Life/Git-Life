import React, {Component} from 'react';
import OrgItem from './orgitem';

export default class OrgSearchResults extends Component {

  populateResults(){
    if(this.props.results.data){
      return _.reduce(this.props.results.data.items, (accum, item)=>{
        let html =(
            <OrgItem description={item.description} url={item.url} key={item.id}/>
        );
        accum.push(html);
        return accum;
      }, []);
    }
    else {
    
    }
  }

  render() {
    return (
      <div>
        Org Search Results!
        {this.populateResults()}
      </div>
    );
  }

};