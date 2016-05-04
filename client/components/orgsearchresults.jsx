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

  constructHTML() {
    if(this.props.results.data){
      return _.reduce(this.props.results.data.organizations, (accum, item)=>{
        let html =(
            <OrgItem description={item.name} url={item.url} avatar_url={item.avatar_url} key={item.id}/>
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
          return this.constructHTML(this.props.results.data.organizations.sort((a, b) => {
              return a.name.localeCompare(b.name);
            }));
          break;
        case 'numRepos':
          return this.constructHTML(this.props.results.data.organizations.sort((a, b) => {
              //return b. - a.contributions;
            }));
          break;
        case 'repoOrder':
          return this.constructHTML();
          break;
        default:
          return this.constructHTML();
          break;
      }
    }
  }

  render() {
    return (
      <div className='collection'  style={{display: 'inline-block',float:'left', width: '20%', height: '25%', margin: '20px 20px 20px 20px'}}>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Organizations</p>
        <button onClick={() => { this.handleClick('numRepos') }}>Repos</button>
        <button onClick={() => { this.handleClick('name') }}>Name</button>
        <button onClick={() => { this.handleClick('repoOrder') }}>Repo Order</button>
        {this.populateResults(this.state.sort)}
      </div>
    );
  }
};
