import React, {Component} from 'react';
import CommitItem from './commititem';

export default class CommitItems extends Component {
  componentWillMount(){
      this.props.getCommitData();
  }

  showCommitData(){
    // makes data available to CommitItem Component
    return _.reduce(this.props.commitData, (accum, item)=>{
      var tagsThisItem = '';
      for(var i = 0; i < item.labels.length; i++) {
        tagsThisItem += ' ' + item.labels[i].name;
      }

      let html = (
        <CommitItem commitTime={item.updated_at} repo_url={item.html_url} tags={tagsThisItem} key={item.id}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <ul className="container">
        Commit Data:
        {this.showCommitData()}
      </ul>
    );
  }

};
