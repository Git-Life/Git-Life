import React, {Component} from 'react';
import SearchItem from './searchitem';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {results: []};
  }

  populateResults(){
    return _.reduce(this.props.results, (accum, item)=>{
    let html =(
      <SearchItem description={item.description} />
    );
    accum.push(html);
    return accum;
  }, []);
  }


  render() {
    return (
      <div >
      Results!
      {this.populateResults()}
      </div>
    );
  }
}
