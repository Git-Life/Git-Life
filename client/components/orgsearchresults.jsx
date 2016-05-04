import React, {Component} from 'react';
import OrgItem from './orgitem';

export default class OrgSearchResults extends Component {

  populateResults(){
    // console.log('orgsearchresults component: ', this.props.results.data);
    if(this.props.results.data){
      return _.reduce(this.props.results.data.organizations, (accum, item)=>{
        let html =(
            <OrgItem description={item.name} url={item.url} avatar_url={item.avatar_url} key={item.id}/>
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
      <div className='collection'>
        Org Search Results!
        {this.populateResults()}
      </div>
    );
  }

};