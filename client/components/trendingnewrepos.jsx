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
    return _.reduce(newData, (accum, item, key) => {

      let html = (
            <div className="card small col s3 m2 blue-grey lighten-4" >
              <p>{key + 1}</p>
              <li className="repoName" key={item.html_url}>
                <a  style={{fontWeight:'bold'}} href={item.html_url}>{item.name}</a>
              </li>
              <p> {item.stargazers}</p>
              <p className="lang">{item.language}</p>
            </div>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div className="newRepoSection">
        <ul className="row"  style={{display: 'block'}}>
          <h5 style={{fontWeight:'bold', textAlign: 'center'}}>Top New Repositories</h5>
          <div className="divider"></div>
          {this.populateResults()}
        </ul>
      </div>
    )
  }
};
