import React from 'react';
// import { rhythm } from 'utils/typography';
import { config } from 'config';
import Navigation from 'components/Navigation';
import FullPageScroll from 'components/FullPageScroll';
import ScrollItem from 'components/ScrollItem';
import 'css/landing.scss';

const SiteIndex = () => (
    <div className="landing">
      <FullPageScroll>
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
        <ScrollItem className="landing-who">
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
        </ScrollItem>
        <ScrollItem className="landing-what">
          <div className="content-wrapper">
            <p className="content-title">What We Do</p>
            <p className="content-subtitle">
              We are thought partners. We bring together market needs and technology to design and develop innovative solutions. We work with our clients and play the role of strategist, developer and innovator.</p><br/>
            <p className="content-subtitle">
              Our expertise is in building mobile and web applications with modern development practices and frameworks.
            </p>
          </div>
        </ScrollItem>
        <ScrollItem className="landing-process">
          <div className="content-wrapper">
            <p className="content-title">Our Process</p>
            <br/>
            <p className="content-subtitle">We live by three rules: compassion, innovation, integrity. We feel that business must be conducted for the benefit of the whole and not just the individual. These are values we look for not only in ourselves, but also in our clients.
            </p><br/>
            <p className="content-subtitle">
              Call us starry-eyed, but these are the values we stick to and strive to embody every day.
            </p>
          </div>
        </ScrollItem>
      </FullPageScroll>
    </div>
  );

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;