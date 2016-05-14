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
     console.log('cat')
     this.props.wired()
     this.props.searchHN();
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
    console.log(this.props.dataResults)
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
      <div>
        <div className="news card">
          Trending News
          {this.populateResults()}
          {this.populateDataResults()}
          {this.populateHNResults()}
        </div>
      </div>
    );
  }
}
