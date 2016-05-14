import React, {Component} from 'react';
import OrgItem from './orgitem';

export default class OrgSearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {sort: ''};
  }

  handleClick(sortBy) {
    this.setState({sort: sortBy});
  }

  constructHTML(data) {
    if(data){
      return _.reduce(data, (accum, item, index)=>{
        let html =(
              <OrgItem
                description={item.name}
                url={item.url}
                avatar_url={item.avatar_url}
                key={index}/>
        );
        accum.push(html);
        return accum;
      }, []);
    }
  }

  populateResults(sortBy) {
    if(this.props.results.data){
      switch (sortBy) {
        case 'name':
          var newArray = this.props.results.data.organizations.slice();
          return this.constructHTML(newArray.sort((a, b) => {
              return a.name.localeCompare(b.name);
            }));
          break;
        case 'numRepos':
          var newArray = this.props.results.data.organizations.slice();
          return this.constructHTML(newArray.sort((a, b) => {
              //return b. - a.contributions;
            }));
          break;
        case 'repoOrder':
          return this.constructHTML(this.props.results.data.organizations);
          break;
        default:
          return this.constructHTML(this.props.results.data.organizations);
          break;
      }
    }
  }

  render() {
    return (
      <div className='col s12'>
        <div className='row'>
          <div className='col s12  center-align'>
            Top Organizations
          </div>
        </div>
        <div className='row '>
          <div className='col s12  '>
            <button className='col s6 waves-effect waves-light btn' onClick={() => { this.handleClick('name') }}>Name</button>
            <button className='col s6 waves-effect waves-light btn' onClick={() => { this.handleClick('repoOrder') }}>Popularity</button>
          </div>
        </div>
        <div className='row'>
          <div className='col s12  z-depth-3 grey lighten-5'>
            <ul className='collection z-depth-1'>
              {this.populateResults(this.state.sort)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
//         <button onClick={() => { this.handleClick('numRepos') }}>Repos</button>
