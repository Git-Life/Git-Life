import React, {Component} from 'react';
import UserResult from '../components/userResult';

export default class UserResults extends Component {


  constructor(props){
    super(props)
  }

  constructHTML(dataObj){

    return _.reduce(dataObj, (accum, item)=>{
      let html =(
        <UserResult
          name={item.name}
          url={item.url}
          key={item.id}
          contributions={item.contributions}
          count={item.count}
          />
      );
      accum.push(html);
      return accum;
    }, []);

  }

  populateResults(sortBy){
    if(this.props.results.data){
      switch (sortBy) {
        case 'name':
          return this.constructHTML(this.props.results.data.contributors
            .sort((a, b) => {
              return a.name - b.name;
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


  }

  render() {
    return (
      <div className='collection'>
        {this.populateResults('contributions')}
      </div>
    );
  }

};
