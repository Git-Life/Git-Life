import React, {Component} from 'react';
import UserResult from '../components/userResult';

export default class UserResults extends Component {

  populateResults(){
    if(this.props.results.data){
      return _.reduce(this.props.results.data.contributors, (accum, item)=>{
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
    else{

    }



  }

  render() {
    return (
      <div className='collection' style={{display: 'inline-block',float:'left', width: '25%', height: '25%', margin:'20px 20px 20px 30px'}}>
        {this.populateResults()}
      </div>
    );
  }

};
