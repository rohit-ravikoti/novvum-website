import React from 'react';
// import { prefixLink } from 'gatsby-helpers';
import './css/FullPageScroll.scss';
var browser = require('detect-browser');
import $ from 'jquery';

// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = browser.name === "firefox";
var isIe = browser.name === "ie";
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";

export default class FullPageScroll extends React.Component {
  componentDidMount(){
    this.totalSlideNumber = this.props.children.length;
    // ------------- ADD EVENT LISTENER ------------- //
    window.addEventListener(mousewheelEvent, _.throttle(this.parallaxScroll.bind(this), 60), false);
  }
  // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
  parallaxScroll(evt) {
    let delta;
    if (isFirefox) {
      //Set delta for Firefox
      delta = evt.detail * (-120);
    } else if (isIe) {
      //Set delta for IE
      delta = -evt.deltaY;
    } else {
      //Set delta for all other browsers
      delta = evt.wheelDelta;
    }

    if (ticking != true) {
      if (delta <= -scrollSensitivitySetting) {
        //Down scroll
        ticking = true;
        if (currentSlideNumber !== this.totalSlideNumber - 1) {
          currentSlideNumber++;
          this.nextItem();
        }
        this.slideDurationTimeout(slideDurationSetting);
      }
      if (delta >= scrollSensitivitySetting) {
        //Up scroll
        ticking = true;
        if (currentSlideNumber !== 0) {
          currentSlideNumber--;
        }
        this.previousItem();
        this.slideDurationTimeout(slideDurationSetting);
      }
    }
  }

  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
  slideDurationTimeout(slideDuration) {
    setTimeout(function() {
      ticking = false;
    }, slideDuration);
  }

  // ------------- SLIDE MOTION ------------- //
  nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  }

  previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  }

  render(){
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
};

FullPageScroll.propTypes = {
};

export default FullPageScroll;