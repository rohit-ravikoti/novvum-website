import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';
var $ = require('jquery');

export default class About extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    require('fullpage.js/jquery.fullpage.js');
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: "#myMenu",
        css3: true,
        scrollingSpeed: 1000,
        controlArrows: false,
        verticalCentered: false
    });
  }
  render(){
    return (
      <div id='fullpage'>
        <div className="section active" id="section0">
            <h1>Header here</h1>
        </div>
        <div className="section" id="section1">
          blah
        </div>
      </div>
    );
  }
}