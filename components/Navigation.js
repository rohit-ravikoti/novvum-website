import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import './css/navigation.scss';
import NovvumLogo from './NovvumLogo';
import 'font-awesome/scss/font-awesome.scss';
var Menu = require('react-burger-menu').stack;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Navigation extends React.Component {
  constructor(){
    super();
    this.state={
      mounted: false
    }
  }
  componentDidMount(){
    this.setState({mounted: true})
  }
  render(){
    return(
      <ReactCSSTransitionGroup 
        transitionName="navigation" 
        transitionAppear={true} 
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div className="novvum-nav" key="one">
          <div 
            id="myMenu"
            className="nav-container"
          >
              <div 
                data-menuanchor="home" 
                className="nav-item active"
              >
                <a 
                  href="#home"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div className="nav-item-content">
                    <span className="fa fa-home fa-2x"/>
                  </div>
                </a>
              </div>
              <div 
                data-menuanchor="work" 
                className="nav-item" 
              >
                <a href="#work">
                  <div className="nav-item-content">
                    <span className="fa fa-briefcase fa-2x"/>
                    Work
                  </div>
                </a>
              </div>
              <div 
                data-menuanchor="process" 
                className="nav-item"
              >
                <a href="#process">
                  <div className="nav-item-content">
                    <span className="fa fa-cogs fa-2x"/>
                    Process
                  </div>
                </a>
              </div>
              <div 
                data-menuanchor="about" 
                className="nav-item"
              >
                <a href="#about">
                  <div className="nav-item-content">
                    <span className="fa fa-question fa-2x"/>
                    About
                  </div>
                </a>
              </div>
              <div 
                data-menuanchor="contact" 
                className="nav-item"
              >
                <a href="#contact">
                  <div className="nav-item-content">
                    <span className="fa fa-phone fa-2x"/>
                    Contact
                  </div>
                </a>
              </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
};