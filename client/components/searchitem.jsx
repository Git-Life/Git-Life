import React, {Component} from 'react';
import Modal from 'react-modal';


export default class SearchItem extends Component{
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
  }

openModal(){
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
   this.refs.subtitle.style.color = '#f00';
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }

 handleOpenModal(){
   this.openModal();
 }

  render(){
    return (
      <div>

      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}>

        <h2 ref="subtitle">Hello</h2>
        <button onClick={()=>{this.closeModal()}}>close</button>
        <div>
          <SelectedRepo
            repo={this.props.selectedRepo}
            issues={this.props.issues}
            getIssues={this.props.actions.getIssues}/>
        </div>

      </Modal>
      <div
        className='collection-item'
        class="badge">
        <div>
          <a
            className='modalOpener'
            href='#'
            onclick={()=>{this.handleOpenModal(); return false;}} >
            {this.props.description}
          </a>

        <a
          onClick={()=>{this.props.selectRepo(this.props.thisRepoIs)}}
          style={{float: 'right'}}>{this.props.issues}</a>

        </div>

      </div>
    </div>
  );
  }
}
