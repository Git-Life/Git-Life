import React, {Component} from 'react';

export default class SelectedRepo extends Component{
  constructor(props){
    super(props)
    this.state = {repo: {}, issues: []}
  }
  componentWillReceiveProps(){
    if(this.props.repo.data){
      this.setState({repo: this.props.repo.data});
    }

  }

  getIssues(){
    this.props.getIssues(this.state.repo.issues_url);

  }

  populateResults(){
    if(this.props.issues.data){
      return _.reduce(this.props.issues.data.data, (accum, item)=>{
        let html =(
          <li className='collection-item'
            id={item.id}>
            {item.title}
          </li>

        );
        accum.push(html);
        return accum;
      }, []);
    }


  }

  render(){
    return (

      <div>
        This is where selectedRepo will go.
        <button onClick={()=>{this.getIssues()}}>Get Issues</button>
        {this.state.repo.name}
        <ul className='collection'>
          {this.populateResults()}
        </ul>
      </div>
  );
  }
}
