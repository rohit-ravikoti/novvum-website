import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';
import Navigation from 'components/Navigation';
import FullPageScroll from 'components/FullPageScroll';
import ScrollItem from 'components/ScrollItem';
import 'css/landing.scss';

const SiteIndex = () => (
    <div className="landing">
      <ScrollItem className="landing-home">
        <div style={{
            position: "absolute",
            backgroundColor: "white",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0
          }}
        ></div>
        <iframe
          src="https://s.codepen.io/rravikot/debug/OXQxzg"
          style={{
            position: 'absolute', 
            border: '0px #FFFFFF none',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3
          }}
          name="myiFrame"
          scrolling="no"
          frameBorder="0"
          marginHeight="0px"
          marginWidth="0px"
          height="100%"
          width="100%"
        />
        <div className="content-wrapper">
          <div className="content-container">
            <div className="content-title">{config.authorName}</div>
            <div className="content-subtitle">
              “All innovation begins with vision. It’s what happens next that is critical.”
              <br/>
              - Eric Ries
            </div>
          </div>
        </div>
        <Navigation />
      </ScrollItem> 
    </div>
  );

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;