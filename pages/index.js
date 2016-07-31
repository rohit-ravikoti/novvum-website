import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';
import Home from 'components/Home';
import ScrollBarSection from 'components/ScrollBarSection';
import '../css/base.scss';

var $ = require('jquery');

class SiteIndex extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    require('fullpage.js/jquery.fullpage.js');
   $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#27ae60', '#7BAABE', '#f39c12', '#e74c3c'],
        anchors: ['home', 'work', 'process', 'about', 'contact'],
        menu: "#myMenu",
        controlArrows: false,
        verticalCentered: false,
        slidesNavigation: true,
        //normalScrollElements: ['#work', '#process', '#about', '#contact']
    });
  }
  render(){
    return (
      <div id='fullpage'>
        <div className="section active" id="section0">
          <Home />
        </div>
      </div>
    );
  }
}
SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;