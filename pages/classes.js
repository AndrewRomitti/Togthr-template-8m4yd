import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBarCorner from '../components/nav-bar-corner'
import ClassPage from '../components/class-page'
import ClassPageInvert from '../components/class-page-invert'

const Classes = (props) => {
  return (
    <>
      <div className="classes-container">
        <Head>
          <title>Classes - Togthr template</title>
          <meta property="og:title" content="Classes - Togthr template" />
        </Head>
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
          text21="Java is quickly taking over the world as one of the most versatile language. Explore this object oriented language that created Minecraft and is the backbone to countless software around the world."
          heading11="Intro to Java"
          image_src1="https://images.unsplash.com/photo-1517650862521-d580d5348145?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxKYXZhfGVufDB8fHx8MTY5MTAzMzg0Nnww&amp;ixlib=rb-4.0.3&amp;h=1500"
          image_src2="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtaW5lY3JhZnR8ZW58MHx8fHwxNjkxMzc0MTMxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="class-page-invert-root-class-name"
        ></ClassPageInvert>
        <ClassPage
          text1="Grades: 4-6"
          text2="New to programming? Block based programming will provide new programmers with the basics they need to get started. This course will go over the fundamentals of computer programming in an fun, block-based way."
          heading1="Block Based Programming"
          image_src="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxCbG9jayUyMGJhc2VkJTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNjkxMDM0MTIzfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="class-page-root-class-name2"
        ></ClassPage>
        <ClassPageInvert
          text2="Websites are the backbone of the internet, in this class students will learn how to design and create websites and the foundational principles to become a frontend engineer."
          text21="Websites are the everywhere on the internet, in this class students will learn how to design and create websites and the foundational principles to become a frontend engineer."
          heading1="Intro to Web Design"
          heading11="Intro to Web Design"
          image_src1="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxXZWJzaXRlfGVufDB8fHx8MTY5MTAzNDA0M3ww&amp;ixlib=rb-4.0.3&amp;h=1500"
          image_src2="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHdlYnNpdGV8ZW58MHx8fHwxNjkxMzc0MTY2fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="class-page-invert-root-class-name1"
        ></ClassPageInvert>
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
                    <Link href="/">
                      <a className="classes-link1">LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a className="classes-link2">Instagram</a>
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
          .classes-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .classes-container1 {
            width: 100%;
            height: 35vh;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1600673645627-1c47394132ac?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxkYXJrJTIwcHVycGxlfGVufDB8fHx8MTY5MDEzMzI0MXww&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .classes-text {
            color: #ffffff;
            font-size: 6em;
            align-self: center;
            text-align: center;
          }
          .classes-create {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .classes-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: var(--dl-color-primary-100);
          }
          .classes-header {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .classes-heading {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .classes-link {
            text-decoration: none;
            background-color: #000000;
          }
          .classes-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .classes-content1 {
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
          .classes-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .classes-container2 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .classes-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .classes-text10 {
            color: rgb(255, 255, 255);
            font-size: 4.5em;
            font-family: Merriweather;
            line-height: 24px;
          }
          .classes-container3 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .classes-text11 {
            color: rgb(255, 255, 255);
            align-self: flex-start;
            text-align: left;
          }
          .classes-links {
            gap: 120px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .classes-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .classes-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .classes-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .classes-link1 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .classes-link1:hover {
            opacity: 0.5;
          }
          .classes-link2 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .classes-link2:hover {
            opacity: 0.5;
          }
          @media (max-width: 1200px) {
            .classes-container {
              background-color: #000000;
            }
          }
          @media (max-width: 991px) {
            .classes-content {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .classes-heading {
              font-size: 50px;
            }
            .classes-content1 {
              border-top-width: 0px;
            }
            .classes-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .classes-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .classes-create {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .classes-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .classes-heading {
              font-size: 36px;
            }
            .classes-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .classes-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .classes-heading {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .classes-link {
              text-align: center;
            }
            .classes-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Classes
