import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';
import Navigation from 'components/Navigation';
import FullPageScroll from 'components/FullPageScroll';
import ScrollItem from 'components/ScrollItem';
import 'css/landing.scss';

const About = () => (
  <div className="landing">
    <FullPageScroll>
      <ScrollItem className="landing-who">
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
          src="http://s.codepen.io/rravikot/debug/dXKxkR"
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
          <div className="card">
            <p className="content-title">Who</p>
            <p className="content-subtitle">Novvum was started by two childhood friends who had to move away from each other. One went to Arizona while the other stayed in California. A number of years later, after they graduated from college and worked for a few years, they reunited to
              pursue their dream of world domination.</p><br/>
            <p className="content-subtitle">

              Now, we are a small team of engineers, designers and developers who love to have fun. We have the most fun when we work with other businesses and startups to create solutions that add real value to the world.</p><br/>
            <p className="content-subtitle">

              We will continue to grow and improve to finally realize our dream of taking over the world!
            </p>
          </div>
        </div>
        <Navigation/>
      </ScrollItem>
    </FullPageScroll>
  </div>
);

export default About;