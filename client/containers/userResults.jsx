import React, {Component} from 'react';
import UserResult from '../components/userResult';

export default class UserResults extends Component {


  constructor(props){
    super(props);
    this.state = {filter: '', results: props.results};
    this.constructHTML = this.constructHTML.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.populateResults = this.populateResults.bind(this);

  }

  constructHTML(dataObj){
    return _.reduce(dataObj, (accum, item)=>{
      let html =(
        <UserResult
          name={item.name}
          url={item.url}
          key={item.id}
          contributions={item.contributions}
          count={item.count}
          />
      );
      accum.push(html);
      return accum;
    }, []);
  }

  handleFilter(){

    this.setState({filter: 'name'});
  }

  populateResults(sortBy){
    if(this.state.results.data){
      switch (sortBy) {
        case 'name':
        console.log('this.state.results', this.state.results);
          return this.constructHTML(this.state.results.data.contributors
            .sort((a, b) => {
              return a.name - b.name;
            }));
          break;
        case 'contributions':
          return this.constructHTML(this.state.results.data.contributors
            .sort((a, b) => {
              return b.contributions - a.contributions;
            }));
          break;
        case 'count':
          return this.constructHTML(this.state.results.data.contributors
            .sort((a, b) => {
              return b.count - a.count;
            }));
          break;
        default:
          return this.constructHTML(this.state.results.data.contributors
            .sort((a, b) => {
              return b.count - a.count;
            }));
          break;
      }
    }
  }

  render() {
    const results = this.populateResults(this.state.filter);
    return (
      <div className='collection'>


        <button onClick={this.handleFilter}>Name</button>
        <button onClick={this.handleFilter}>Contributions</button>


        { results }
      </div>
    );
  }

};

//UserResults.propTypes = { results: React.PropTypes.object, filter: React.PropTypes.string };
UserResults.defaultProps = { results: {}, filter: "name"};
