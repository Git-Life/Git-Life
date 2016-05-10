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
    console.log('newOrgs, populateResults: ', this.props.newOrgs.data);
    return _.reduce(this.props.newOrgs.data, (accum, item) => {

      let html = (
          <div className="col s3 m4" >
            <div className="card small" style={{ padding: '10px 10px 10px 10px'}}>
              <img className='imgNewOrg' src={item.avatar} alt='org avatar' />
              <li key={item.html_url}>
                <a style={{fontWeight:'bold'}} href={item.html_url}>{item.login}</a>
              </li>
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
        <ul className="row"  style={{display: 'block', float:'right'}}>
          <h5 style={{fontWeight:'bold', textAlign: 'center'}}>Top New Organizations</h5>
          <div className="divider"></div>
          {this.populateResults()}
        </ul>
      </div>
    );
  }
};