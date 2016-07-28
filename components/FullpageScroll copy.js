import React from 'react';
// import { prefixLink } from 'gatsby-helpers';
import './css/FullPageScroll.scss';
import $ from 'jquery';

import SectionOne from './SectionOne';

export default class FullPageScroll extends React.Component {
  componentDidMount(){
    $('#fullpage').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000
  }
  render(){
    return (
      <div id='fullpage'>
        <SectionOne></SectionOne>
        <SectionOne></SectionOne>
        <SectionOne></SectionOne>
        <SectionOne></SectionOne>
      </div>
    );
  }
};

FullPageScroll.propTypes = {
};

export default FullPageScroll;