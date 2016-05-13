import React, {Component} from 'react';

export default class TrendsNav extends Component{



  render(){
    const states = ['topRepos', 'topNewRepos', 'topOrgs', 'topNewOrgs'].map(item =>{
      let isActive = ''
      let nameFunction = function(item){
        if (item === 'topRepos'){
          return "Top Repositories"
        }
        if (item === 'topNewRepos'){
          return "Top New Repositories"
        }
        if (item === 'topOrgs'){
          return "Top Organizations"
        }
        if (item === 'topNewOrgs'){
          return "Top New Organizations"
        }
      };
      if(this.props.navButton === item) {
        isActive = 'active'
      }
      return <a className={`collection-item ${isActive}`} key={item} onClick={()=>{this.props.updateNavButton(item)}}>{nameFunction(item)}</a>
    }
    );
    return (
      <div className="collection">
        {states}
      </div>
    );
  }

}
