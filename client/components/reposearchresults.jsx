import React, {Component} from 'react';
import SearchItem from './searchitem';
import Modal from 'react-modal';


export default class RepoSearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    console.log(this);
    var that = this;
   that.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
   this.refs.subtitle.style.color = '#f00';
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }


  populateResults(){
    if(this.props.results.data){
      return _.reduce(this.props.results.data.items, (accum, item)=>{

        let html =(
            <SearchItem
              description={item.description}
              openIssues={"Open Issues: " + item.open_issues}
              issuesUrl={item.issues_url}
              repoUrl={item.clone_url}
              key={item.clone_url}
              thisRepoIs={item}
              selectRepo={this.props.selectRepo}
              openModal={this.openModal}

              />
        );
        accum.push(html);
        return accum;
      }, []);
    }
    else{

    }
  }

  render() {
    return (
      <div className='collection' style={{display: 'inline-block',float:'left', width: '40%', height: '25%', margin: '20px 20px 20px 20px'}} >
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
           >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={()=>{this.closeModal()}}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Repositories</p>
        {this.populateResults()}
      </div>
    );
  }
};
