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
            <div className="repolist card-panel" >
              <p className="num">{key + 1 + "."}</p>
              <li className="repoName" key={item.html_url}>
                <a  style={{fontWeight:'bold'}} href={item.html_url}>{item.name.toUpperCase()  + "\t "  }</a>
              </li>
              <p className="stars"> {item.stargazers}</p>
                <i className='tiny material-icons yellow-text accent-3'>grade</i>
              <p className="lang">{item.language}</p>
              <p>{item.description}</p>
            </div>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div className="newRepoSection">
        <ul>
          <h5 className="headingTitle">Top New Repositories</h5>

          {this.populateResults()}
        </ul>
      </div>
    )
  }
};
