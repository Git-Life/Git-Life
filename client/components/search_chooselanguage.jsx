import React, {Component} from 'react';

export default class ChooseLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "All"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleLanguageSelect(event);
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <div>
        <select className='selectLang' value={this.state.value} onChange={this.handleChange}>
          <option value={"All"}>All Languages</option>
          <option value={"JavaScript"}>JavaScript</option>
          <option value={"Java"}>Java</option>
          <option value={"Python"}>Python</option>
          <option value={"C++"}>C++</option>
          <option value={"C#"}>C#</option>
          <option value={"Ruby"}>Ruby</option>        
        </select>
      </div>
    );
  }
};