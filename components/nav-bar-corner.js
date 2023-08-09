import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavBarCorner = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className={`nav-bar-corner-container ${props.rootClassName} `}>
        <header
          data-thq="thq-navbar"
          className="nav-bar-corner-navbar-interactive"
        >
          <div className="nav-bar-corner-container1">
            <nav className="nav-bar-corner-links">
              <Link href="/">
                <a className="nav-bar-corner-link">
                  <span>Home</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/classes">
                <a className="nav-bar-corner-link1">Classes</a>
              </Link>
              <Link href="/about-us">
                <a className="nav-bar-corner-link2">About Us</a>
              </Link>
              <a
                href="https://3r1uuf85sey.typeform.com/to/tMwlFpUW"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-bar-corner-register button"
              >
                Contact
              </a>
              <a
                href="https://3r1uuf85sey.typeform.com/to/dsaPxR9p"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-bar-corner-register1 button"
              >
                Register
              </a>
            </nav>
            <div
              data-thq="thq-navbar-nav"
              className="nav-bar-corner-desktop-menu"
            ></div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="nav-bar-corner-burger-menu"
          ></div>
          {isVisible && (
            <div
              data-thq="thq-mobile-menu"
              className="nav-bar-corner-mobile-menu"
            >
              <div className="nav-bar-corner-nav">
                <div className="nav-bar-corner-top">
                  <div
                    data-thq="thq-close-menu"
                    className="nav-bar-corner-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="nav-bar-corner-icon"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="nav-bar-corner-links1">
                  <span className="nav-bar-corner-text2">Home</span>
                  <span className="nav-bar-corner-text3">Classes</span>
                  <span className="nav-bar-corner-text4">About Us</span>
                </nav>
                <div className="nav-bar-corner-buttons">
                  <button className="nav-bar-corner-register2 button">
                    Register
                  </button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="nav-bar-corner-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="nav-bar-corner-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="nav-bar-corner-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          )}
        </header>
      </div>
      <style jsx>
        {`
          .nav-bar-corner-container {
            width: 100%;
            height: 97px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-corner-navbar-interactive {
            width: 100%;
            height: 111px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-primary-300);
          }
          .nav-bar-corner-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .nav-bar-corner-links {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .nav-bar-corner-link {
            color: rgb(255, 255, 255);
            font-size: 1.5em;
            align-self: center;
            text-align: center;
            text-decoration: none;
          }
          .nav-bar-corner-link1 {
            color: #ffffff;
            font-size: 1.5em;
            align-self: center;
            text-align: center;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .nav-bar-corner-link2 {
            color: #ffffff;
            font-size: 1.5em;
            align-self: center;
            text-align: center;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .nav-bar-corner-register {
            top: -19px;
            right: -36px;
            position: absolute;
            align-self: flex-end;
            text-align: right;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .nav-bar-corner-register1 {
            top: -19px;
            right: 118px;
            position: absolute;
            align-self: flex-end;
            text-align: right;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .nav-bar-corner-desktop-menu {
            flex: 1;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .nav-bar-corner-burger-menu {
            display: none;
          }
          .nav-bar-corner-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .nav-bar-corner-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-corner-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .nav-bar-corner-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-bar-corner-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-bar-corner-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-corner-text2 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-corner-text3 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-corner-text4 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-corner-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-bar-corner-register2 {
            background-color: var(--dl-color-primary-300);
          }
          .nav-bar-corner-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-corner-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-corner-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 991px) {
            .nav-bar-corner-links {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .nav-bar-corner-desktop-menu {
              display: none;
            }
            .nav-bar-corner-burger-menu {
              display: flex;
            }
            .nav-bar-corner-mobile-menu {
              background-color: #000000;
            }
            .nav-bar-corner-icon {
              fill: #d9d9d9;
            }
            .nav-bar-corner-text2 {
              color: #ffffff;
            }
            .nav-bar-corner-text3 {
              color: #ffffff;
            }
            .nav-bar-corner-text4 {
              color: #ffffff;
            }
          }
          @media (max-width: 767px) {
            .nav-bar-corner-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav-bar-corner-links {
              justify-content: flex-start;
            }
            .nav-bar-corner-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .nav-bar-corner-nav {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .nav-bar-corner-top {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .nav-bar-corner-icon {
              align-self: flex-start;
            }
            .nav-bar-corner-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-corner-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-corner-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-corner-register2 {
              background-color: var(--dl-color-primary-300);
            }
          }
          @media (max-width: 479px) {
            .nav-bar-corner-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .nav-bar-corner-links {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .nav-bar-corner-link {
              font-size: 1em;
            }
            .nav-bar-corner-link1 {
              font-size: 1em;
            }
            .nav-bar-corner-link2 {
              font-size: 1em;
            }
            .nav-bar-corner-register {
              top: -25px;
              right: -7px;
              width: 105px;
              height: 72px;
              font-size: 0.9em;
              text-decoration: none;
              background-color: var(--dl-color-primary-100);
            }
            .nav-bar-corner-register1 {
              top: -27px;
              left: 262px;
              width: 79px;
              height: 72px;
              font-size: 1em;
            }
            .nav-bar-corner-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavBarCorner.defaultProps = {
  text1: 'Text',
  rootClassName: '',
  text: 'Text',
}

NavBarCorner.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavBarCorner
