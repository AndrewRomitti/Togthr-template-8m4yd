import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBarCorner from '../components/nav-bar-corner'
import ClassPage from '../components/class-page'
import ClassPageInvert from '../components/class-page-invert'
import './classes.css'

const Classes = (props) => {
  return (
    <div className="classes-container">
      <Helmet>
        <title>Classes - Togthr template</title>
        <meta property="og:title" content="Classes - Togthr template" />
      </Helmet>
      <NavBarCorner rootClassName="nav-bar-corner-root-class-name2"></NavBarCorner>
      <div className="classes-container1">
        <h1 className="classes-text">Our Classes</h1>
      </div>
      <ClassPage
        text2="Python is the most popular programming language in the world! Students will discover the introductory principles they need to lay the foundation to program in this versatile and high level programming language."
        heading1="Intro to Python"
        image_src="https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxQeXRob258ZW58MHx8fHwxNjkxMDM0MDIyfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        rootClassName="class-page-root-class-name1"
      ></ClassPage>
      <ClassPageInvert
        text2="Java is quickly taking over the world as one of the most versatile language. Explore this object oriented language that created Minecraft"
        text21="Java is quickly taking over the world as one of the most versatile language. Explore this object oriented language that created Minecraft"
        heading11="Intro to Java"
        image_src1="https://images.unsplash.com/photo-1517650862521-d580d5348145?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxKYXZhfGVufDB8fHx8MTY5MTAzMzg0Nnww&amp;ixlib=rb-4.0.3&amp;h=1500"
        image_src2="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtaW5lY3JhZnR8ZW58MHx8fHwxNjkxMzc0MTMxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        rootClassName="class-page-invert-root-class-name"
      ></ClassPageInvert>
      <ClassPage
        text1="Grades: 8"
        image_src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNjkxMzc0MTk1fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        rootClassName="class-page-root-class-name"
      ></ClassPage>
      <ClassPageInvert
        text2="Websites are the backbone of the internet, in this class students will learn how to design and create websites and the foundational principles to become a frontend engineer."
        text21="Websites are the backbone of the internet, in this class students will learn how to design and create websites and the foundational principles to become a frontend engineer."
        heading1="Intro to Web Design"
        heading11="Intro to Web Design"
        image_src1="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxXZWJzaXRlfGVufDB8fHx8MTY5MTAzNDA0M3ww&amp;ixlib=rb-4.0.3&amp;h=1500"
        image_src2="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHdlYnNpdGV8ZW58MHx8fHwxNjkxMzc0MTY2fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        rootClassName="class-page-invert-root-class-name1"
      ></ClassPageInvert>
      <ClassPage
        text1="Grades: 4-6"
        text2="Python is the most popular programming language in the world! Students will discover the introductory principles they need to lay the foundation to program in this versatile and high level programming language."
        heading1="Block Based Programming"
        image_src="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxCbG9jayUyMGJhc2VkJTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNjkxMDM0MTIzfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        rootClassName="class-page-root-class-name2"
      ></ClassPage>
      <section className="classes-create">
        <div className="classes-content">
          <div className="classes-header">
            <h2 className="classes-heading">
              <span>
                Register now!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Courses free of cost!</span>
              <br></br>
              <span>Deadline: September 17th</span>
              <br></br>
            </h2>
          </div>
          <a
            href="https://3r1uuf85sey.typeform.com/to/dsaPxR9p"
            target="_blank"
            rel="noreferrer noopener"
            className="classes-link button"
          >
            <span>
              <span>Get Registered Here</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <div className="classes-footer">
        <div className="classes-content1">
          <div className="classes-main">
            <div className="classes-container2">
              <div className="classes-branding">
                <span className="classes-text10">Codeify</span>
              </div>
              <div className="classes-container3">
                <span className="classes-text11">EIN: 93-2262482</span>
              </div>
            </div>
            <div className="classes-links">
              <div className="classes-column">
                <span className="classes-header1">Social</span>
                <div className="classes-list">
                  <Link to="/" className="classes-navlink">
                    LinkedIn
                  </Link>
                  <Link to="/" className="classes-navlink1">
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

export default Classes
