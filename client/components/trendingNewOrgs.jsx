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
          <div  className="orgs" key={item.id}>
            <div>
              <i className='tiny material-icons yellow-text accent-3'>grade</i>
              <ul key={item.html_url}>
                <a style={{fontWeight:'bold'}} href={item.html_url}>{item.login}</a>
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
        <ul   >
          <h5 >Top New Organizations</h5>

          {this.populateResults()}
        </ul>
      </div>
    );
  }
};
