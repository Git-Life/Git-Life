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
    return _.reduce(newOrgs, (accum, item) => {

      let html = (
          <div  className="orgs">
            <div  style={{ padding: '10px 10px 10px 10px'}}>
              <img className='imgOrg' src={item.avatar} alt='org avatar' />
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
      <div>
        <ul   >
          <h5 style={{fontWeight:'bold'}}>Top New Organizations</h5>

          {this.populateResults()}
        </ul>
      </div>
    );
  }
};
