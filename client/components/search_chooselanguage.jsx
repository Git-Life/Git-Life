import React, {Component} from 'react';

export default class ChooseLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "All", selectedLang: 'Language'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleLanguageSelect(event);
    this.setState({value: event});
    this.setState({selectedLang: event});
  }

  render(){
    return (
      <span>
        <a className='dropdown-button btn black' href='#' data-activates='languageDropdown'>
          {this.state.selectedLang}
        </a>
        <ul id='languageDropdown' className='dropdown-content'>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('All')}>All Languages</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('JavaScript')}>JavaScript</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('Java')}>Java</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('Python')}>Python</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('C')}>C</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('C++')}>C++</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('C#')}>C#</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('Ruby')}>Ruby</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('HTML')}>HTML</a></li>
          <li><a href="javascript:void(0)"
            onClick={() => this.handleChange('CSS')}>CSS</a></li>
        </ul>



      </span>
    );
  }
};
