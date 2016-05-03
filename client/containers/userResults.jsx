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

    switch (sortBy) {
      case 'name':
        constructHTML(this.props.results.data.contributors
          .sort((a, b) => {
            a.name - b.name;
          }));
        break;
      case 'contributions':
        constructHTML(this.props.results.data.contributors
          .sort((a, b) => {
            b.contributions - a.contributions;
          }));
        break;
      case 'count':
        constructHTML(this.props.results.data.contributors
          .sort((a, b) => {
            b.count - a.count;
          }));
        break;
      default:
        constructHTML(this.props.results.data.contributors
          .sort((a, b) => {
            b.count - a.count;
          }));
        break;
    }

  }

  render() {
    return (
      <div className='collection'>
        {this.populateResults()}
      </div>
    );
  }

};
