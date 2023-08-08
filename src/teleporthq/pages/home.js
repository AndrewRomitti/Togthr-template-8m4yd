import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <div className="home-container1">
            <nav className="home-links">
              <Link to="/" className="home-navlink">
                <span>Home</span>
                <br></br>
              </Link>
              <Link to="/classes" className="home-navlink1">
                Classes
              </Link>
              <Link to="/about-us" className="home-navlink2">
                About Us
              </Link>
              <a
                href="https://3r1uuf85sey.typeform.com/to/dsaPxR9p"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register button"
              >
                Register
              </a>
            </nav>
          </div>
          <div className="home-buttons"></div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-text02">Home</span>
              <span className="home-text03">Classes</span>
              <span className="home-text04">About Us</span>
            </nav>
            <div className="home-buttons1">
              <button className="home-register1 button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
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
                Creating a world where the generation now will be the technology
                leaders of the future
              </span>
              <br></br>
              <br></br>
              <span className="home-text12">
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
      <div className="home-container2">
        <h1>  </h1>
      </div>
      <div className="home-container3">
        <h1 className="home-text16">
          <span>Our Purpose</span>
          <br></br>
        </h1>
      </div>
      <section className="home-note">
        <h2 className="home-caption1">
          Codeify&apos;s purpose is to provide the highest quality programming
          education to as many students as possible, no matter their steps. We
          are dedicated to providing free courses, with high quality education,
          including tutoring, actual programming experience, and the expertise
          needed for greatness
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
          <span className="home-text19">Objectives</span>
          <div className="home-container4">
            <div className="home-objectives-list">
              <div className="objective">
                <h3 className="home-text20">Access</h3>
                <p className="home-text21">
                  We want to ensure that as many students can get the education
                  that they want, without any barriers except for a computer and
                  a passion to learn.
                </p>
              </div>
              <div className="objective home-objective1">
                <h3 className="home-text22">Education</h3>
                <p className="home-text23">
                  We make sure that our team consists of qualified individuals.
                  We make sure that our courses are carefully selected for the
                  best success.
                </p>
              </div>
              <div className="objective home-objective2">
                <h3 className="home-text24">Growth</h3>
                <p className="home-text25">
                  We want students that finish a Codeify course excited to learn
                  more. We want them to develop a passion for learning and have
                  them grow not just as programmers but also as thinkers and
                  leaders.
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
              Codeify will ensure that your child has a quality education. This
              includes hands on projects, low student to faculty ratio, and
              qualified tutors that can ensure that your child can succeed no
              matter their level of expertise.
            </p>
          </div>
          <div className="home-container5">
            <Link to="/classes" className="home-navlink3 button">
              <span>
                <span>Explore Courses</span>
                <br></br>
              </span>
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
              your resume. If you are in high school, college, or beyond Codeify
              staff will train you to be a successful tutor so you can gain
              experience while helping a good cause
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
            <span className="home-text33">questions</span>
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
                We will send all guardians a zoom link to give to their children
                that will send them to a main zoom room. From there we will
                organize the students into breakout rooms where each class will
                have a small group of students that will have an hour and 30
                minute class.
              </p>
            </div>
            <div className="home-element4">
              <h3 className="home-header11">
                Can my child take multiple classes?
              </h3>
              <p className="home-content08">
                While you can only take one class per session, you can take as
                many classes as you want as long as you sign up for the session
                following in a new course
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header12">
                What requirements do I need to be a tutor?
              </h3>
              <p className="home-content09">
                As long as you are currently in high school or beyond you are
                able to sign up to be a tutor. We will evaluate your application
                and interview you, and if accepted you will tutor in one of our
                courses and receive an hour and a half of volunteer hours every
                week a session
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content10">
          <div className="home-main">
            <div className="home-container6">
              <div className="home-branding">
                <span className="home-text35">Codeify</span>
              </div>
              <div className="home-container7">
                <span className="home-text36">EIN: 93-2262482</span>
              </div>
            </div>
            <div className="home-links2">
              <div className="home-column2">
                <span className="home-header13">Social</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink4">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink5">
                    Instagram
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
  )
}

export default Home
