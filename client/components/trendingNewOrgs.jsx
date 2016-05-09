import {reduce, each} from 'lodash';
import React, {Component} from 'react';
import SearchItem from './searchitem';

export default class TrendingNewOrgs extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getNewOrgs();
  }

  populateResults() {
    console.log('newOrgs, populateResults: ', this.props.newOrgs.data);
    return _.reduce(this.props.newOrgs.data, (accum, item) => {

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
        TRENDING NEW ORGS, wahoo!
        <ul>
        {this.populateResults()}
        </ul>
      </div>
    )
  }
};