import React, {Component} from 'react';
import {reduce} from 'lodash';
import WiredItem from './wiredItem';
import DataItem from './dataitem';
import HNItem from './hnitem';


export default class WiredResults extends Component {

  constructor(props) {
    super(props);
    // this.populateResults = this.populateResults.bind(this);
  }
  componentWillMount() {
     this.props.searchData()
      .then(() => {
        this.props.wired()
          .then(() => {
            this.props.searchHN();
          });
      });
  }

  populateResults(){
    return this.props.wiredResults.reduce((accum, item, key) => {
      let html =(
        <WiredItem key={key} title={item.title} link={item.link}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  populateDataResults(){
    return reduce(this.props.dataResults, (accum, item, key) => {
      let html =(
        <DataItem key={key} title={item.title} link={item.link}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }
  populateHNResults(){
    return reduce(this.props.hnresults, (accum, item, key) => {
      let html =(
        <HNItem key={key} title={item.title} link={item.link}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div className="container">
        <ul  className="collapsible popout" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons" ></i>Hacker News</div>
            <ul className="collapsible-body active">{this.populateHNResults()}</ul>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons" ></i>DataTau Top News</div>
            <ul className="collapsible-body">{this.populateDataResults()}</ul>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons" ></i>Wired Top Tech News</div>
            <ul className="collapsible-body">{this.populateResults()}</ul>
          </li>
        </ul>

      </div>
    );
  }
}
