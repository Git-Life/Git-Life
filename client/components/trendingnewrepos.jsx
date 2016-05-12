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
    if (this.props.newRepos.data){
      var newData = this.props.newRepos.data.slice(0, 10);
    }
    return _.reduce(newData, (accum, item) => {

      let html = (
          <div className="col s3 m2" >
            <div className="card small" style={{ padding: '10px 10px 10px 10px'}}>
              <li key={item.html_url}>
                <a style={{fontWeight:'bold'}} href={item.html_url}>{item.name}</a>
              </li>
              <p>Stargazers: {item.stargazers}</p>
              <p>{item.language}</p>
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
        <ul className="row"  style={{display: 'block',float:'right'}}>
          <h5 style={{fontWeight:'bold', textAlign: 'center'}}>Top New Repositories</h5>
          <div className="divider"></div>
          {this.populateResults()}
        </ul>
      </div>
    )
  }
};
