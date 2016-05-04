import React, {Component} from 'react';
import OrgItem from './orgitem';

export default class OrgSearchResults extends Component {

  populateResults(){
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
      <div className='collection'  style={{display: 'inline-block',float:'left', width: '20%', height: '25%', margin: '20px 20px 20px 20px'}}>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Organizations</p>
        {this.populateResults()}
      </div>
    );
  }

};
