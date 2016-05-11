import React, {Component} from 'react';
import UserResult from '../components/userResult';

export default class UserResults extends Component {


  constructor(props){
    super(props);
    this.state = {sort: ''};
  }

  constructHTML(dataObj){
    var dataObject = dataObj.slice(0, 30);
    return _.reduce(dataObject, (accum, item)=>{
      let html =(
        <UserResult
          name={item.name}
          url={item.html_url}
          key={item.id}
          contributions={item.contributions}
          count={item.count}
          />
      );
      accum.push(html);
      return accum;
    }, []);

  }

  handleSort(sortBy){
    this.setState({sort: sortBy});
  }

  populateResults(sortBy){
    if(this.props.results.data){
      switch (sortBy) {
        case 'name':
          return this.constructHTML(this.props.results.data.contributors
            .sort((a, b) => {
              return a.name.localeCompare(b.name);
            }));
          break;
        case 'contributions':
          return this.constructHTML(this.props.results.data.contributors
            .sort((a, b) => {
              return b.contributions - a.contributions;
            }));
          break;
        case 'count':
          return this.constructHTML(this.props.results.data.contributors
            .sort((a, b) => {
              return b.count - a.count;
            }));
          break;
        default:
          return this.constructHTML(this.props.results.data.contributors
            .sort((a, b) => {
              return b.count - a.count;
            }));
          break;
      }
    }
    else{

    }

  }

  render() {
    return (
      <div className='collection' style={{display: 'inline-block',float:'left', width: '25%', height: '25%', margin:'20px 20px 20px 30px'}}>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Users</p>
        <button onClick={() => {this.handleSort('count')}}>Count</button>
        <button onClick={() => {this.handleSort('contributions')}}>Contributions</button>
        <button onClick={() => {this.handleSort('name')}}>Name</button>
      {this.populateResults(this.state.sort)}
      </div>
    );
  }

};
