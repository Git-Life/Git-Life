import {reduce, each} from 'lodash';
import React, {Component} from 'react';

export default class TrendingNewOrgs extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getNewOrgs();
  }

  populateResults() {
    if (this.props.newOrgs.data){
      var newOrgs=this.props.newOrgs.data.slice(0, 20);
    }
    return _.reduce(newOrgs, (accum, item, key) => {

      let html = (
          <div className="orgs card-panel" key={item.id}>
            <div>
              <img className='imgTrendOrg' src={item.avatar} alt='org avatar' />
              <ul key={item.html_url}>
                <a className='truncate imageDescription' href={item.html_url}>{item.login}</a>
              </ul>
            </div>
          </div>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div>
        <ul>
          {this.populateResults()}
        </ul>
      </div>
    );
  }
};
