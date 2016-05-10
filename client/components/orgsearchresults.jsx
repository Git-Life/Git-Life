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
      return _.reduce(data, (accum, item)=>{
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
      <div  style={{float:'left', width: '20%', height: '25%', margin: '20px 20px 20px 20px'}}>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Organizations</p>
        <button onClick={() => { this.handleClick('name') }}>Name</button>
        <button onClick={() => { this.handleClick('repoOrder') }}>Repo Order</button>
        {this.populateResults(this.state.sort)}
      </div>
    );
  }
};
//         <button onClick={() => { this.handleClick('numRepos') }}>Repos</button>
