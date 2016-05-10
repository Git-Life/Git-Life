import {reduce, each} from 'lodash';
import React, {Component} from 'react';

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
          <div className="col s3 m4" >
            <div className="card small" style={{ padding: '10px 10px 10px 10px'}}>
              <li key={item.html_url}>
                <a style={{fontWeight:'bold'}} href={item.html_url}>{item.name}</a>
              </li>
              <p>{item.description}</p>
              <p>Stargazers: {item.stargazers}</p>
              <p>Forks: {item.forks}</p>
              <p>Language: {item.language}</p>
            </div>
          </div>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div className="section">
        <ul className="row"  style={{display: 'block'; float:'right'}}>
          <h5 style={{fontWeight:'bold', textAlign: 'center'}}>Top New Repositories</h5>
          <div className="divider"></div>
          {this.populateResults()}
        </ul>
      </div>
    )
  }
};
