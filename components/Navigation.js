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
    let items = [
      {
        pathname: '/',
        content: (
          <div className="nav-item-content">
            <span className="fa fa-home fa-2x"/>
          </div>
        ),
        inactiveContent: (
          <div className="nav-item-inactive-content">
            <span className="fa fa-home"/>
          </div>
        ),
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      },
      {
        pathname: '/work/',
        content: (
          <div className="nav-item-content">
            <span className="fa fa-briefcase fa-2x"/>
            Work
          </div>
        )
      },
      {
        pathname: '/process/',
        content: (
          <div className="nav-item-content">
            <span className="fa fa-cogs fa-2x"/>
            Process
          </div>
        )
      },
      {
        pathname: '/about/',
        content: (
          <div className="nav-item-content">
            <span className="fa fa-question fa-2x"/>
            About
          </div>
        )
      },
      {
        pathname: '/contact/',
        content: (
          <div className="nav-item-content">
            <span className="fa fa-phone fa-2x"/>
            Contact
          </div>
        )
      }
    ]
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
            className="nav-container"
          >
            {
              items.map((item) => {
                return (
                  <div 
                    key={item.pathname}
                    className={`nav-item${item.pathname === this.props.location.pathname ? " active" : ""}`}
                  >
                    <a 
                      href={item.pathname}
                      style={item.style}
                    >
                      {item.content}
                      {item.inactiveContent}
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
};