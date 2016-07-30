import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';
import Home from 'components/Home';
var $ = require('jquery');

class SiteIndex extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    require('fullpage.js/jquery.fullpage.js');
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['home', 'work', 'process', 'about', 'contact'],
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
            <Home />
        </div>
        <div className="section" id="section1">
          blah
        </div>
      </div>
    );
  }
}
SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;