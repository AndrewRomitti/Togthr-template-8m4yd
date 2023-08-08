import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBarCorner from '../components/nav-bar-corner'
import WhoUsComponent from '../components/who-us-component'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>AboutUs - Togthr template</title>
        <meta property="og:title" content="AboutUs - Togthr template" />
      </Helmet>
      <NavBarCorner rootClassName="nav-bar-corner-root-class-name3"></NavBarCorner>
      <div className="about-us-container1">
        <h1 className="about-us-text">Meet the Team</h1>
      </div>
      <h1 className="about-us-heading">
        <span>Executive Team</span>
        <br></br>
      </h1>
      <div className="about-us-card-container">
        <WhoUsComponent
          text="Founder/Global Executive Director"
          text1="Laasya is a high school senior from Minnesota. She loves math and technology and wants to use STEM to help others. In her free time she enjoys biking and playing video games."
          heading="Laasya Aki"
          image_src="https://images.unsplash.com/photo-1689351779949-35df2fe11464?ixid=M3w5MTMyMXwwfDF8YWxsfDIwfHx8fHx8Mnx8MTY4OTk4MDkwOXw&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="who-us-component-root-class-name3"
        ></WhoUsComponent>
        <WhoUsComponent
          text="Founder/Global Executive Director"
          text1="Andrew is a rising senior in Columbia, MO. He has been programming for 9 years and is passionate in AI and software."
          heading="Andrew Romitti"
          rootClassName="who-us-component-root-class-name4"
          image_src="/img-01582.jpg"
        ></WhoUsComponent>
        <WhoUsComponent
          text="Founder/Global Executive Director"
          text1="Pranavi is a rising senior from Math and Science Academy in Minnesota. She enjoys photography and videography. In her free time, she loves to spend time with friends and family and explore new places!"
          heading="Pranavi Verdere"
          image_src="/pranaviimage_1_2000.jpg"
          rootClassName="who-us-component-root-class-name5"
        ></WhoUsComponent>
      </div>
      <div className="about-us-footer">
        <div className="about-us-content">
          <div className="about-us-main">
            <div className="about-us-container2">
              <div className="about-us-branding">
                <span className="about-us-text3">Codeify</span>
              </div>
              <div className="about-us-container3">
                <span className="about-us-text4">EIN: 93-2262482</span>
              </div>
            </div>
            <div className="about-us-links">
              <div className="about-us-column">
                <span className="about-us-header">Social</span>
                <div className="about-us-list">
                  <Link to="/" className="about-us-navlink">
                    LinkedIn
                  </Link>
                  <Link to="/" className="about-us-navlink1">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
