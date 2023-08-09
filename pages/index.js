import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavBarCorner from '../components/nav-bar-corner'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Togthr template</title>
          <meta property="og:title" content="Togthr template" />
        </Head>
        <NavBarCorner rootClassName="nav-bar-corner-root-class-name1"></NavBarCorner>
        <section className="home-hero">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1689005047173-b43ff68072ed?ixid=M3w5MTMyMXwwfDF8YWxsfDIyfHx8fHx8Mnx8MTY4OTk5MDcyMXw&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image"
          />
          <div className="home-hero-content">
            <h1 className="home-heading">
              <span>Code...</span>
              <br></br>
              <span> with Codeify</span>
              <br></br>
            </h1>
            <div className="home-header-container">
              <div className="home-header"></div>
              <p className="home-caption">
                <span>
                  Creating a world where the generation now will be the
                  technology leaders of the future
                </span>
                <br></br>
                <br></br>
                <span className="home-text07">
                  Fall Registration Deadline: September 17th
                </span>
                <br></br>
              </p>
            </div>
            <a
              href="https://3r1uuf85sey.typeform.com/to/dsaPxR9p"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              <span>Get Registed Now</span>
            </a>
          </div>
        </section>
        <div className="home-container1">
          <h1>  </h1>
        </div>
        <div className="home-container2">
          <h1 className="home-text11">
            <span>Our Purpose</span>
            <br></br>
          </h1>
        </div>
        <section className="home-note">
          <h2 className="home-caption1">
            Codeify&apos;s purpose is to provide the highest quality programming
            education to as many students as possible, no matter their steps. We
            are dedicated to providing free courses, with high quality
            education, including tutoring, actual programming experience, and
            the expertise needed for greatness
          </h2>
        </section>
        <section className="home-statistics">
          <div className="home-content">
            <div className="home-stat">
              <h3 className="home-header01">200+</h3>
              <span className="home-caption2">Students Tutored</span>
            </div>
            <div className="home-stat1">
              <h3 className="home-header02">5:1</h3>
              <span className="home-caption3">Student to Faculty Ratio</span>
            </div>
          </div>
        </section>
        <section className="home-objectives">
          <div className="home-content01">
            <span className="home-text14">Objectives</span>
            <div className="home-container3">
              <div className="home-objectives-list">
                <div className="objective">
                  <h3 className="home-text15">Access</h3>
                  <p className="home-text16">
                    We want to ensure that as many students can get the
                    education that they want, without any barriers except for a
                    computer and a passion to learn.
                  </p>
                </div>
                <div className="objective home-objective1">
                  <h3 className="home-text17">Education</h3>
                  <p className="home-text18">
                    We make sure that our team consists of qualified
                    individuals. We make sure that our courses are carefully
                    selected for the best success.
                  </p>
                </div>
                <div className="objective home-objective2">
                  <h3 className="home-text19">Growth</h3>
                  <p className="home-text20">
                    We want students that finish a Codeify course excited to
                    learn more. We want them to develop a passion for learning
                    and have them grow not just as programmers but also as
                    thinkers and leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-growth">
          <div className="home-content02">
            <div className="home-header03">
              <div className="home-header04">
                <h2 className="home-heading1">
                  <span>Quality education, free of cost</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-caption4">
                Codeify will ensure that your child has a quality education.
                This includes hands on projects, low student to faculty ratio,
                and qualified tutors that can ensure that your child can succeed
                no matter their level of expertise.
              </p>
            </div>
            <div className="home-container4">
              <Link href="/classes">
                <a className="home-link1 button">
                  <span>
                    <span>Explore Courses</span>
                    <br></br>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="home-images">
            <div className="home-square"></div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxraWQlMjBjb21wdXRlcnxlbnwwfHx8fDE2ODk5ODMyMDh8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="home-image1"
            />
          </div>
        </section>
        <section id="tutoring" className="home-get-started">
          <div className="home-header-container1">
            <div className="home-header05">
              <h2 className="home-heading2">Interested in being a tutor?</h2>
              <p className="home-caption5">
                Sign up below to gain volunteer hours, experience, and more on
                your resume. If you are in high school, college, or beyond
                Codeify staff will train you to be a successful tutor so you can
                gain experience while helping a good cause
              </p>
            </div>
            <div className="home-button">
              <a
                href="https://3r1uuf85sey.typeform.com/to/A0QnTSvg"
                target="_blank"
                rel="noreferrer noopener"
                className="home-button1 button"
              >
                <span>Become a Tutor here</span>
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNvZGluZ3xlbnwwfHx8fDE2ODk5ODMwNDh8MA&amp;ixlib=rb-4.0.3&amp;w=600"
            className="home-image2"
          />
        </section>
        <section className="home-faq">
          <div className="home-header06">
            <h2 className="home-heading3">
              <span>Frequently asked </span>
              <span className="home-text28">questions</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
          <div className="home-content03">
            <div className="home-column">
              <div className="home-element">
                <h3 className="home-header07">Are we a 501(c) organization?</h3>
                <p className="home-content04">
                  Yes! We are a certified 501(c) organization and if you want to
                  search us our EIN is: 93-2262482
                </p>
              </div>
              <div className="home-element1">
                <h3 className="home-header08">
                  What is required before the first class my child takes?
                </h3>
                <p className="home-content05">
                  All that is required is a computer, internet connection, Zoom
                  installed and updated, and the application replit. We will
                  include all the instructions for how to do this in the
                  guardian&apos;s meeting we hold before every session.
                </p>
              </div>
              <div className="home-element2">
                <h3 className="home-header09">How long do courses last?</h3>
                <p className="home-content06">
                  There are 10 lectures in each course, we offer Saturday and
                  Sunday as the days we teach. There are morning and afternoon
                  options each day to accomodate to your schedule.
                </p>
              </div>
            </div>
            <div className="home-column1">
              <div className="home-element3">
                <h3 className="home-header10">
                  What does a typical class look like?
                </h3>
                <p className="home-content07">
                  We will send all guardians a zoom link to give to their
                  children that will send them to a main zoom room. From there
                  we will organize the students into breakout rooms where each
                  class will have a small group of students that will have an
                  hour and 30 minute class.
                </p>
              </div>
              <div className="home-element4">
                <h3 className="home-header11">
                  Can my child take multiple classes?
                </h3>
                <p className="home-content08">
                  While you can only take one class per session, you can take as
                  many classes as you want as long as you sign up for the
                  session following in a new course
                </p>
              </div>
              <div className="home-element5">
                <h3 className="home-header12">
                  What requirements do I need to be a tutor?
                </h3>
                <p className="home-content09">
                  As long as you are currently in high school or beyond you are
                  able to sign up to be a tutor. We will evaluate your
                  application and interview you, and if accepted you will tutor
                  in one of our courses and receive an hour and a half of
                  volunteer hours every week a session
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-footer">
          <div className="home-content10">
            <div className="home-main">
              <div className="home-container5">
                <div className="home-branding">
                  <span className="home-text30">Codeify</span>
                </div>
                <div className="home-container6">
                  <span className="home-text31">EIN: 93-2262482</span>
                </div>
              </div>
              <div className="home-links">
                <div className="home-column2">
                  <span className="home-header13">Social</span>
                  <div className="home-list">
                    <Link href="/">
                      <a className="home-link2">LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link3">Instagram</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            margin-top: 0px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-image {
            top: -2px;
            left: -4px;
            width: 100%;
            height: 1003px;
            position: absolute;
            align-self: center;
            margin-top: 0px;
            object-fit: cover;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .home-hero-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 100px;
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header-container {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 600px;
            margin-top: var(--dl-space-space-twounits);
            line-height: 36px;
          }
          .home-text07 {
            font-style: normal;
            font-weight: 700;
          }
          .home-link {
            transition: 0.3s;
            text-decoration: none;
            background-color: #522888;
          }
          .home-link:active {
            background-color: var(--dl-color-primary-500);
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 4em;
            align-self: center;
            text-align: center;
          }
          .home-note {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-caption1 {
            color: rgb(124, 124, 128);
            font-size: 40px;
            max-width: 800px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            line-height: 52px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption2 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header02 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption3 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-objectives {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content01 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-top-width: 1px;
          }
          .home-text14 {
            color: #7c7c80;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-objectives-list {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text16 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text18 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text20 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-growth {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-content02 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header04 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption4 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-link1 {
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-images {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-square {
            top: 64px;
            right: -35px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-primary-300);
          }
          .home-image1 {
            width: 640px;
            z-index: 100;
            margin-top: var(--dl-space-space-sixunits);
            object-fit: cover;
          }
          .home-get-started {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-header-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            z-index: 100;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header05 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading2 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption5 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-button {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-button1 {
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-image2 {
            top: 0px;
            right: 0px;
            width: auto;
            bottom: 0px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading3 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text28 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-content03 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-column {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content04 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content05 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content06 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-column1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content07 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content08 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content09 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content10 {
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
          .home-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            font-size: 4.5em;
            font-family: Merriweather;
            line-height: 24px;
          }
          .home-container6 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text31 {
            color: rgb(255, 255, 255);
            align-self: flex-start;
            text-align: left;
          }
          .home-links {
            gap: 120px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link2 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link2:hover {
            opacity: 0.5;
          }
          .home-link3 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link3:hover {
            opacity: 0.5;
          }
          @media (max-width: 1200px) {
            .home-hero-content {
              margin-left: var(--dl-space-space-twounits);
            }
            .home-objectives {
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-content01 {
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading2 {
              color: rgb(255, 255, 255);
              font-size: 60px;
              font-style: normal;
              font-weight: 400;
            }
            .home-caption5 {
              color: var(--dl-color-primary-700);
              font-size: 24px;
              line-height: 36px;
            }
            .home-image2 {
              width: 600px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              padding-top: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-stat {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat1 {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-content01 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-objectives-list {
              padding-right: 0px;
            }
            .home-objective1 {
              flex: 1;
            }
            .home-objective2 {
              flex: 1;
            }
            .home-growth {
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-images {
              padding-top: 0px;
            }
            .home-square {
              top: -20px;
              right: -20px;
            }
            .home-image1 {
              margin-top: 0px;
            }
            .home-caption5 {
              color: var(--dl-color-primary-700);
            }
            .home-faq {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-content03 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-column {
              max-width: 100%;
            }
            .home-header07 {
              font-size: 24px;
            }
            .home-content04 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header08 {
              font-size: 24px;
            }
            .home-content05 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header09 {
              font-size: 24px;
            }
            .home-content06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-column1 {
              max-width: 100%;
            }
            .home-header10 {
              font-size: 24px;
            }
            .home-content07 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header11 {
              font-size: 24px;
            }
            .home-content08 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header12 {
              font-size: 24px;
            }
            .home-content09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content10 {
              border-top-width: 0px;
            }
            .home-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-hero-content {
              height: auto;
              position: relative;
            }
            .home-heading {
              color: rgb(255, 255, 255);
              font-size: 3.5em;
              font-style: normal;
              font-weight: 500;
            }
            .home-note {
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-caption1 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-statistics {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-stat {
              gap: var(--dl-space-space-unit);
            }
            .home-header01 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header02 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-objectives {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-objectives-list {
              width: 100%;
              flex-direction: column;
            }
            .home-growth {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content02 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header03 {
              gap: var(--dl-space-space-unit);
            }
            .home-heading1 {
              font-size: 40px;
            }
            .home-caption4 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image1 {
              width: 100%;
            }
            .home-get-started {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading2 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption5 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image2 {
              width: 400px;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-header06 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading3 {
              font-size: 36px;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-element {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header07 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element1 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header08 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element2 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header09 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-element3 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header10 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element4 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header11 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element5 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header12 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-image {
              height: 100%;
            }
            .home-hero-content {
              gap: var(--dl-space-space-threeunits);
              width: 479px;
              height: auto;
              position: relative;
              margin-left: 0px;
            }
            .home-heading {
              width: 260px;
              height: auto;
              position: static;
              font-size: 3em;
              align-self: flex-start;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-link {
              text-align: center;
            }
            .home-text14 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text15 {
              font-size: 18px;
            }
            .home-text17 {
              font-size: 18px;
            }
            .home-text19 {
              font-size: 18px;
            }
            .home-heading1 {
              font-size: 36px;
            }
            .home-caption5 {
              color: #ffffff;
            }
            .home-image2 {
              width: auto;
              height: 400px;
            }
            .home-header06 {
              gap: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
