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
      <div className='col s12' id="searchbox">
        <div className='row'>
          <div className='col s12  center-align'>Top Users</div>
        </div>
        <div className='row '>
          <div className='col s12  '>

              <button className='col s4 waves-effect waves-light btn black' onClick={() => {this.handleSort('count')}}>Count</button>
              <button className='col s4 waves-effect waves-light btn black' onClick={() => {this.handleSort('contributions')}}>Commits</button>
              <button className='col s4 waves-effect waves-light btn black' onClick={() => {this.handleSort('name')}}>Name</button>

          </div>
        </div>
        <div className='row'>
          <div className='col s12 z-depth-3 blue-grey lighten-5'>
            <ul className='collection z-depth-1'>
              {this.populateResults(this.state.sort)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

};
