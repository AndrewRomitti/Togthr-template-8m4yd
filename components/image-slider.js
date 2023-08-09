import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ImageSlider = (props) => {
  const [SlideNumber, setSlideNumber] = useState(1)
  return (
    <>
      <div className={`image-slider-container ${props.rootClassName} `}>
        {SlideNumber === 1 && (
          <div className="image-slider-slide1">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="image-slider-image"
            />
            <div className="image-slider-container1">
              <h1 className="image-slider-text">{props.heading}</h1>
              <span className="image-slider-text1">{props.text}</span>
              <span className="image-slider-text2">{props.text2}</span>
            </div>
            <div
              onClick={() => setSlideNumber(3)}
              className="image-slider-left-b"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon">
                <path d="M534 342q146 0 262 86t162 222l-100 32q-34-104-123-169t-201-65q-124 0-220 80l156 154h-384v-384l152 154q126-110 296-110z"></path>
              </svg>
            </div>
            <div
              onClick={() => setSlideNumber(2)}
              className="image-slider-right-b"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon02">
                <path d="M786 452l152-154v384h-384l156-154q-96-80-220-80-102 0-197 68t-127 166l-100-32q44-136 161-222t263-86q170 0 296 110z"></path>
              </svg>
            </div>
          </div>
        )}
        {SlideNumber === 2 && (
          <div className="image-slider-slide2">
            <img
              alt={props.image_alt14}
              src={props.image_src14}
              className="image-slider-image1"
            />
            <div className="image-slider-container2">
              <h1 className="image-slider-text3">{props.heading1}</h1>
              <span className="image-slider-text4">{props.text3}</span>
              <span className="image-slider-text5">{props.text21}</span>
            </div>
            <div
              onClick={() => setSlideNumber(1)}
              className="image-slider-left-b1"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon04">
                <path d="M534 342q146 0 262 86t162 222l-100 32q-34-104-123-169t-201-65q-124 0-220 80l156 154h-384v-384l152 154q126-110 296-110z"></path>
              </svg>
            </div>
            <div
              onClick={() => setSlideNumber(3)}
              className="image-slider-right-b1"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon06">
                <path d="M786 452l152-154v384h-384l156-154q-96-80-220-80-102 0-197 68t-127 166l-100-32q44-136 161-222t263-86q170 0 296 110z"></path>
              </svg>
            </div>
          </div>
        )}
        {SlideNumber === 3 && (
          <div className="image-slider-slide3">
            <img
              alt={props.image_alt141}
              src={props.image_src141}
              className="image-slider-image2"
            />
            <div className="image-slider-container3">
              <h1 className="image-slider-heading">{props.heading11}</h1>
              <span className="image-slider-text6">{props.text31}</span>
              <span className="image-slider-text7">{props.text211}</span>
            </div>
            <div
              onClick={() => setSlideNumber(2)}
              className="image-slider-left-b2"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon08">
                <path d="M534 342q146 0 262 86t162 222l-100 32q-34-104-123-169t-201-65q-124 0-220 80l156 154h-384v-384l152 154q126-110 296-110z"></path>
              </svg>
            </div>
            <div
              onClick={() => setSlideNumber(1)}
              className="image-slider-right-b2"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon10">
                <path d="M786 452l152-154v384h-384l156-154q-96-80-220-80-102 0-197 68t-127 166l-100-32q44-136 161-222t263-86q170 0 296 110z"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .image-slider-container {
            width: 90%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image-slider-slide1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .image-slider-image {
            width: 100%;
            cursor: pointer;
            height: 60vh;
            object-fit: cover;
          }
          .image-slider-container1 {
            flex: 0 0 auto;
            right: -1px;
            width: 100%;
            bottom: -1px;
            height: 342px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-primary-300);
          }
          .image-slider-text {
            color: #ffffff;
            width: 100%;
            font-size: 3em;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .image-slider-text1 {
            color: var(--dl-color-primary-700);
            width: 100%;
            font-size: 2em;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .image-slider-text2 {
            color: #ffffff;
            width: 100%;
            margin: var(--dl-space-space-unit);
            font-size: 2em;
            align-self: center;
            text-align: center;
          }
          .image-slider-left-b {
            top: 225px;
            flex: 0 0 auto;
            left: 3%;
            width: 50px;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .image-slider-left-b:hover {
            background-color: var(--dl-color-primary-700);
          }
          .image-slider-icon {
            width: 24px;
            height: 24px;
          }
          .image-slider-right-b {
            top: 225px;
            flex: 0 0 auto;
            right: 3%;
            width: 50px;
            cursor: pointer;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .image-slider-right-b:hover {
            background-color: var(--dl-color-primary-700);
          }
          .image-slider-icon02 {
            width: 24px;
            height: 24px;
          }
          .image-slider-slide2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .image-slider-image1 {
            width: 100%;
            cursor: pointer;
            height: 60vh;
            object-fit: cover;
          }
          .image-slider-container2 {
            flex: 0 0 auto;
            right: -1px;
            width: 100%;
            bottom: -1px;
            height: 342px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-primary-300);
          }
          .image-slider-text3 {
            color: #ffffff;
            width: 100%;
            font-size: 3em;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .image-slider-text4 {
            color: var(--dl-color-primary-700);
            width: 100%;
            font-size: 2em;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .image-slider-text5 {
            color: #ffffff;
            width: 100%;
            margin: var(--dl-space-space-unit);
            font-size: 2em;
            align-self: center;
            text-align: center;
          }
          .image-slider-left-b1 {
            top: 225px;
            flex: 0 0 auto;
            left: 3%;
            width: 50px;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .image-slider-left-b1:hover {
            background-color: var(--dl-color-primary-700);
          }
          .image-slider-icon04 {
            width: 24px;
            height: 24px;
          }
          .image-slider-right-b1 {
            top: 225px;
            flex: 0 0 auto;
            right: 3%;
            width: 50px;
            cursor: pointer;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .image-slider-right-b1:hover {
            background-color: var(--dl-color-primary-700);
          }
          .image-slider-icon06 {
            width: 24px;
            height: 24px;
          }
          .image-slider-slide3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .image-slider-image2 {
            width: 100%;
            cursor: pointer;
            height: 60vh;
            object-fit: cover;
          }
          .image-slider-container3 {
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 342px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-primary-300);
          }
          .image-slider-heading {
            color: #ffffff;
            width: 100%;
            font-size: 3em;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .image-slider-text6 {
            color: var(--dl-color-primary-700);
            width: 100%;
            font-size: 2em;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .image-slider-text7 {
            color: #ffffff;
            width: 100%;
            margin: var(--dl-space-space-unit);
            font-size: 2em;
            align-self: center;
            text-align: center;
          }
          .image-slider-left-b2 {
            top: 225px;
            flex: 0 0 auto;
            left: 3%;
            width: 50px;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .image-slider-left-b2:hover {
            background-color: var(--dl-color-primary-700);
          }
          .image-slider-icon08 {
            width: 24px;
            height: 24px;
          }
          .image-slider-right-b2 {
            top: 225px;
            flex: 0 0 auto;
            right: 3%;
            width: 50px;
            cursor: pointer;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .image-slider-right-b2:hover {
            background-color: var(--dl-color-primary-700);
          }
          .image-slider-icon10 {
            width: 24px;
            height: 24px;
          }
          .image-slider-root-class-name {
            margin-top: var(--dl-space-space-threeunits);
          }
          @media (max-width: 1200px) {
            .image-slider-container {
              width: 90%;
            }
            .image-slider-slide1 {
              position: relative;
              align-items: center;
            }
            .image-slider-image {
              width: 100%;
              height: 50vh;
            }
            .image-slider-left-b {
              top: 225px;
              left: 3%;
              right: 50px;
              width: 50px;
              height: 50px;
              position: absolute;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              background-color: var(--dl-color-primary-500);
            }
            .image-slider-icon {
              fill: #d9d9d9;
            }
            .image-slider-right-b {
              top: 225px;
              left: NaNpx;
              right: 3%;
              width: 50px;
              height: 50px;
              position: absolute;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              background-color: var(--dl-color-primary-500);
            }
            .image-slider-icon02 {
              fill: #d9d9d9;
            }
            .image-slider-slide2 {
              position: relative;
              align-items: center;
            }
            .image-slider-image1 {
              width: 100%;
              height: 50vh;
            }
            .image-slider-left-b1 {
              top: 225px;
              left: 3%;
              right: 50px;
              width: 50px;
              height: 50px;
              position: absolute;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              background-color: var(--dl-color-primary-500);
            }
            .image-slider-icon04 {
              fill: #d9d9d9;
            }
            .image-slider-right-b1 {
              top: 225px;
              right: 3%;
              width: 50px;
              height: 50px;
              position: absolute;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              background-color: var(--dl-color-primary-500);
            }
            .image-slider-icon06 {
              fill: #d9d9d9;
            }
            .image-slider-slide3 {
              position: relative;
              align-items: center;
            }
            .image-slider-image2 {
              width: 100%;
              height: 50vh;
            }
            .image-slider-left-b2 {
              top: 225px;
              left: 3%;
              right: 50px;
              width: 50px;
              height: 50px;
              position: absolute;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              background-color: var(--dl-color-primary-500);
            }
            .image-slider-icon08 {
              fill: #d9d9d9;
            }
            .image-slider-right-b2 {
              top: 225px;
              right: 3%;
              width: 50px;
              height: 50px;
              position: absolute;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              background-color: var(--dl-color-primary-500);
            }
            .image-slider-icon10 {
              fill: #d9d9d9;
            }
            .image-slider-root-class-name {
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .image-slider-text2 {
              font-size: 1.5em;
            }
            .image-slider-text5 {
              font-size: 1.5em;
            }
            .image-slider-text7 {
              font-size: 1.5em;
            }
          }
          @media (max-width: 479px) {
            .image-slider-container1 {
              right: 0px;
              bottom: 0px;
              height: auto;
            }
            .image-slider-container2 {
              right: 0px;
              bottom: 0px;
              height: auto;
            }
            .image-slider-left-b1 {
              top: 254px;
              left: 13px;
            }
            .image-slider-right-b1 {
              top: 253px;
              right: 15px;
            }
            .image-slider-container3 {
              height: auto;
            }
            .image-slider-left-b2 {
              top: 282px;
              left: 16px;
            }
            .image-slider-right-b2 {
              top: 284px;
              right: 19px;
            }
          }
        `}
      </style>
    </>
  )
}

ImageSlider.defaultProps = {
  image_alt14: 'image',
  image_alt12: 'image',
  text211:
    'This course teaches students the fundamentals on how to harness the concepts of Machine Learning and AI for social good to create innovate solutions to complicated problems',
  image_alt11: 'image',
  heading11: 'Introduction to Machine Learning',
  image_alt13: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src141:
    'https://images.unsplash.com/photo-1515630771457-09367d0ae038?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtYWNoaW5lfGVufDB8fHx8MTY4OTk5OTg1M3ww&ixlib=rb-4.0.3&h=1500',
  image_alt: 'image',
  rootClassName: '',
  image_alt141: 'image',
  heading: 'Heading',
  image_src1:
    'https://images.unsplash.com/photo-1689267305146-155a1459752c?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY4OTk3Mzk1NHw&ixlib=rb-4.0.3&h=1500',
  text2:
    'Learn the basics of the most popular programming language in the world! In this course students will discover the introductions to Python with hands on projects, personal instruction, and more...',
  text21:
    'Web-Design is one of the most in-demand skills across the world-wide-web. Learn the fundamentals of web-design so your child can make their own websites and begin their journey to web design greatness',
  heading1: 'Introduction to Frontend Design',
  text31: 'Grades: 6-8',
  text3: 'Grades: 6-8',
  text: 'Grades: 6-8',
  image_src11:
    'https://images.unsplash.com/photo-1689005047173-b43ff68072ed?ixid=M3w5MTMyMXwwfDF8YWxsfDIyfHx8fHx8Mnx8MTY4OTk3Mzk1NHw&ixlib=rb-4.0.3&w=1500',
  image_alt1: 'image',
  text1: 'Grades',
  image_src12:
    'https://images.unsplash.com/photo-1689005047173-b43ff68072ed?ixid=M3w5MTMyMXwwfDF8YWxsfDIyfHx8fHx8Mnx8MTY4OTk3Mzk1NHw&ixlib=rb-4.0.3&w=1500',
  image_src14:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHx3ZWJzaXRlfGVufDB8fHx8MTY4OTk5OTY3MHww&ixlib=rb-4.0.3&h=1500',
  image_src13:
    'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixid=M3w5MTMyMXwxfDF8YWxsfDE0fHx8fHx8Mnx8MTY4OTk3Mzk1NHw&ixlib=rb-4.0.3&w=1500',
}

ImageSlider.propTypes = {
  image_alt14: PropTypes.string,
  image_alt12: PropTypes.string,
  text211: PropTypes.string,
  image_alt11: PropTypes.string,
  heading11: PropTypes.string,
  image_alt13: PropTypes.string,
  image_src: PropTypes.string,
  image_src141: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt141: PropTypes.string,
  heading: PropTypes.string,
  image_src1: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  heading1: PropTypes.string,
  text31: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  image_src12: PropTypes.string,
  image_src14: PropTypes.string,
  image_src13: PropTypes.string,
}

export default ImageSlider
