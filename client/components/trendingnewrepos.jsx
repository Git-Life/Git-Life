import {reduce, each} from 'lodash';
import React, {Component} from 'react';
import SearchItem from './searchitem';

export default class TrendingNewRepos extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getNewRepos();
  }

  populateResults() {
    console.log('newRepos, populateResults: ', this.props.newRepos.data);
    return _.reduce(this.props.newRepos.data, (accum, item) => {

      let html = (
        <a href={item.url} target='_blank'><li className='collection-item' class="badge" key={item.key}>
          {item.name}
          <br />
          {item.description}
          <br />
          {item.stargazers}
        </li></a>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div className='divNewRepos'>
        TRENDING NEW REPOS, yay!
        <ul>
        {this.populateResults()}
        </ul>
      </div>
    )
  }
};

        // <ul className='collection' class="col s4" style={{display: 'inline-block',float:'left', margin: "10px 10px 10px 10px"}}>
        //   <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Organizations</p>
        //   {this.populateResults()}
        // </ul>
