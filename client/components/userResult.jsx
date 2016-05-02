import React, {Component} from 'react';
import UserResult from '../components/userResult';

export default class UserResults extends Component {

  populateResults(){
    return _.reduce(this.props.results.data, (accum, item)=>{
      let html =(
        <UserResult description={item.description} repo_url={item.clone_url} key={item.id}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div>
        {this.populateResults()}
      </div>
    );
  }

};
