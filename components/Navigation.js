import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import './css/navigation.scss';
import NovvumLogo from './NovvumLogo';

var Menu = require('react-burger-menu').slide;

const Navigation = (props) => {
  // const { style } = props;
  /*return (
    <div className="navbar">
      <div className="navbar-left">
        <ul>
          <li><a href="#">What We Do</a></li>
          <li className="contrast"><a href="#">Our Process</a></li>
        </ul>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href={ prefixLink('about/') }>About Us</a></li>
          <li className="contrast"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );*/
  return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
  )
};

Navigation.propTypes = {
  style: React.PropTypes.object,
};

export default Navigation;
