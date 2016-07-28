import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';

import $ from 'jquery';
import 'fullpage.js/jquery.fullpage.js';

export default class About extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    $('#fullpage').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['header', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            controlArrows: false,
            verticalCentered: false,
            scrollBar:true
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