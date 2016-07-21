import React from 'react';
// import { prefixLink } from 'gatsby-helpers';
import './css/FullPageScroll.scss';
var browser = require('detect-browser');
import $ from 'jquery';


export default class ScrollItem extends React.Component {
  render(){
    return (
      <section className={`background ${this.props.className}`}>
        {this.props.children}
      </section>
    );
  }
};

ScrollItem.propTypes = {
};

export default ScrollItem;