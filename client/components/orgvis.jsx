import {reduce, each} from 'lodash';
import React, {Component} from 'react';
import SearchItem from './searchitem';
import Chart from 'chart.js';
var PieChart = require('../../node_modules/react-chartjs/lib/pie');
//Chart.defaults.global.responsive = true;

export default class OrgVis extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getTrendingOrgs();
  }

  drawChart() {
    var pieOptions = {
      animatable: true,
      segmentShowStroke : true,
      segmentStrokeColor : "#fff",
      segmentStrokeWidth : 2,
      percentageInnerCutout : 0,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }

    var pieData = [];
    var count = 0;
    var colors = [
      {color: "#F7464A", highlight: "#FF5A5E"},
      {color: "#46BFBD", highlight: "#5AD3D1"},
      {color: "#FDB45C", highlight: "#FFC870"},
      {color: "#949FB1", highlight: "#A8B3C5"},
      {color: "#4D5360", highlight: "#616774"}
    ];

    _.each(this.props.orgs.data, (item) => {
      if(count < 5){
        pieData.push({
          value: item.instances,
          color: colors[count].color, //"#F7464A", //
          highlight: colors[count].highlight, //"#FF5A5E", //
          label: item.org
        });
        count++;
      }
    });

    return (<PieChart data={pieData} options={pieOptions}/>);
  }

  populateResults() {
    //console.log('populateResults: ', this.props.orgs.data);
    return _.reduce(this.props.orgs.data, (accum, item) => {

      let html = (
        <a href={item.url} target='_blank'><li className='collection-item' class="badge" key={item.key}>
          <img className='imgTrendOrg' src={item.avatar} alt='org avatar' />
          {item.org}  
        </li></a>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (<div>

      <ul className='collection' class="col s4" style={{display: 'inline-block',float:'left', margin: "10px 10px 10px 10px"}}>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Organizations</p>
        {this.drawChart()}
        {this.populateResults()}
      </ul>
      </div>
    )
  }
};
