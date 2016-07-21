import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import './css/navigation.scss';
import NovvumLogo from './NovvumLogo';

const Navigation = (props) => {
  // const { style } = props;
  return (
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
  );
};

Navigation.propTypes = {
  style: React.PropTypes.object,
};

export default Navigation;
