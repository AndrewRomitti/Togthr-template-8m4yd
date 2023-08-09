import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBarCorner from '../components/nav-bar-corner'
import WhoUsComponent from '../components/who-us-component'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>AboutUs - Togthr template</title>
          <meta property="og:title" content="AboutUs - Togthr template" />
        </Head>
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
            image_src="/laasya-1500h.jpg"
            rootClassName="who-us-component-root-class-name3"
          ></WhoUsComponent>
          <WhoUsComponent
            text="Founder/Global Executive Director"
            text1="Andrew is a rising senior in Columbia, MO. He has been programming for 9 years and is passionate in AI and software."
            heading="Andrew Romitti"
            image_src="/img-01582-1500h.jpg"
            rootClassName="who-us-component-root-class-name4"
          ></WhoUsComponent>
          <WhoUsComponent
            text="Founder/Global Executive Director"
            text1="Pranavi is a rising senior from Math and Science Academy in Minnesota. She enjoys photography and videography. In her free time, she loves to spend time with friends and family and explore new places!"
            heading="Pranavi Verdere"
            image_src="/pranaviimage_1_2000-1500h.jpg"
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
                    <Link href="/">
                      <a className="about-us-link">LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a className="about-us-link1">Instagram</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .about-us-container1 {
            width: 100%;
            height: 35vh;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxkYXJrJTIwcHVycGxlfGVufDB8fHx8MTY5MDE1NzU1NHww&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .about-us-text {
            color: rgb(255, 255, 255);
            font-size: 6em;
            text-align: center;
          }
          .about-us-heading {
            color: var(--dl-color-primary-500);
            width: 100%;
            margin: var(--dl-space-space-twounits);
            font-size: 4em;
            align-self: center;
            text-align: center;
          }
          .about-us-card-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .about-us-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .about-us-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-container2 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text3 {
            color: rgb(255, 255, 255);
            font-size: 4.5em;
            font-family: Merriweather;
            line-height: 24px;
          }
          .about-us-container3 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-text4 {
            color: rgb(255, 255, 255);
            align-self: flex-start;
            text-align: left;
          }
          .about-us-links {
            gap: 120px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .about-us-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-header {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .about-us-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-link {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .about-us-link:hover {
            opacity: 0.5;
          }
          .about-us-link1 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .about-us-link1:hover {
            opacity: 0.5;
          }
          @media (max-width: 991px) {
            .about-us-heading {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-us-card-container {
              margin-top: var(--dl-space-space-twounits);
            }
            .about-us-content {
              border-top-width: 0px;
            }
            .about-us-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .about-us-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .about-us-card-container {
              height: auto;
              align-self: flex-start;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-us-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .about-us-card-container {
              height: auto;
              margin: var(--dl-space-space-unit);
              position: relative;
              align-self: flex-start;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-us-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
