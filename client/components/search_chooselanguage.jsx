import React, {Component} from 'react';

export default class ChooseLanguage extends Component {

  render(){
    return (
      <button className='dropdown-button btn'  data-activates='dropdown1'>
        Select Language
      </button>
    );
  }
};

//I'm thinking I'll create a function that recalls all 
