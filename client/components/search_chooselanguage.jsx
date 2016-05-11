import React, {Component} from 'react';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';

//require('../styles/materialize.min.css');
//var PieChart = require('../../node_modules/react-chartjs/lib/pie');
//import "~/../../node_modules/materialize-css/dist/css/materialize.min.css";

export default class ChooseLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  // handleChange = (event, index, value) => this.setState({value});

  render(){
    return (
      <div>
        <select className='selectLang' value={this.state.value} onChange={(event, index, value) => this.setState({value})}>
          <option value={1}>All Languages</option>
          <option value={2}>JavaScript</option>
          <option value={3}>Java</option>
          <option value={4}>Python</option>
          <option value={5}>C++</option>
          <option value={6}>C#</option>
          <option value={7}>Ruby</option>        
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