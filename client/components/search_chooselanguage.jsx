import React, {Component} from 'react';

export default class ChooseLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "All"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log(this.props);
    this.props.handleLanguageSelect(event);
    // //this.setState({value: event.currentTarget.value});
    // console.log(event.currentTarget.value);
    // //this.props.onLanguageChange(event.currentTarget.value);
    // console.log('before: ', this.props.language);
    // this.props.language = event.currentTarget.value;
    // console.log('before: ', this.props.language);
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

//I'm thinking I'll create a function that recalls all 
      // <button className='dropdown-button btn'  data-activates='dropdown1'>
      //   Select Language
      // </button>

      // <div className="selectLang input-field col s12">
      //   <select>
      //     <option value="All" selected>All Languages</option>
      //     <option value="JavaScript">JavaScript</option>
      //     <option value="Java">Java</option>
      //     <option value="HTML">HTML</option>
      //   </select>
      //   <label>Materialize Select</label>
      // </div>

      // <div>
      //   <SelectField value='' onChange={this.handleChange}>
      //     <MenuItem value='' primaryText="Never" />
      //     <MenuItem value='' primaryText="Every Night" />
      //     <MenuItem value='' primaryText="Weeknights" />
      //     <MenuItem value='' primaryText="Weekends" />
      //     <MenuItem value='' primaryText="Weekly" />
      //   </SelectField>
      // </div>