import React, {Component} from 'react';
import SearchItem from './searchitem';
import Modal from 'react-modal';
import SelectedRepo from '../components/repoview';


export default class RepoSearchResults extends Component {
  constructor(props){
    super(props);

    this.state = {sort: '', modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(sortBy) {
    this.setState({sort: sortBy});
  }

  constructHTML(data) {
    if(data){
      return _.reduce(data, (accum, item)=>{
        let html =(
          <SearchItem
            name={item.name}
            description={item.description}
            openIssues={"Open Issues: " + item.open_issues}
            issuesUrl={item.issues_url}
            repoUrl={item.clone_url}
            key={item.clone_url}
            thisRepoIs={item}
            selectRepo={this.props.selectRepo}
            openModal={this.openModal}
            closeModal={this.closeModal}
            />
          );
          accum.push(html);
          return accum;
        }, []);
      }
    }



  openModal(){
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }


  populateResults(sortBy){
    if(this.props.results.data){
      switch (sortBy){
        case 'name':
          var newArray = this.props.results.data.items.slice();
          return this.constructHTML(newArray.sort((a, b) =>{
            return a.name.localeCompare(b.name);
          }));
        break;
      case 'popularity':
        var newArray = this.props.results.data.items.slice();
        return this.constructHTML(newArray.sort((a, b)=>{
          return b.stargazers_count - a.stargazers_count;
        }));
        break;
      default:
        return this.constructHTML(this.props.results.data.items);
        break;
      }
    }
  }

  render() {
    return (


      <div className='collection' style={{display: 'inline-block',float:'left', width: '40%', height: '25%', margin: '20px 20px 20px 20px'}} >

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          repo={this.props.selectedRepo}
          issues={this.props.issues}
          getIssues={this.props.getIssues}
          closeModal={this.closeModal}
           >
           <div>


              <button
                className='waves-effect waves-light btn'
                onClick={()=>{this.closeModal()}}>
                X
              </button>
            <div>
              <SelectedRepo
                repo={this.props.selectedRepo}
                issues={this.props.issues}
                getIssues={this.props.getIssues}
                closeModal={this.props.closeModal}/>
            </div>
          </div>
        </Modal>

        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</p>
        <button onClick={()=>{this.handleClick('name')}}>Alphabetically</button>
        <button onClick={()=>{this.handleClick('popularity')}}>Stargazer Count</button>
        {this.populateResults(this.state.sort)}
      </div>
    );
  }
};
