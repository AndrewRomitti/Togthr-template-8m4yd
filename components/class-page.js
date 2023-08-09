import React from 'react'

import PropTypes from 'prop-types'

const ClassPage = (props) => {
  return (
    <>
      <div className={`class-page-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="class-page-image"
        />
        <div className="class-page-container1">
          <h1 className="class-page-text">{props.heading1}</h1>
          <span className="class-page-text1">{props.text1}</span>
          <span className="class-page-text2">{props.text2}</span>
        </div>
      </div>
      <style jsx>
        {`
          .class-page-container {
            width: 90%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-primary-300);
            border-width: 5px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #000000;
          }
          .class-page-image {
            width: 45%;
            height: auto;
            object-fit: cover;
          }
          .class-page-container1 {
            flex: 0 0 auto;
            width: 55%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .class-page-text {
            color: #ffffff;
            font-size: 3em;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .class-page-text1 {
            color: var(--dl-color-gray-700);
            font-size: 2em;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: right;
          }
          .class-page-text2 {
            color: #fffdfd;
            margin: var(--dl-space-space-unit);
            font-size: 2em;
            text-align: center;
          }
          .class-page-root-class-name1 {
            margin: var(--dl-space-space-twounits);
          }
          .class-page-root-class-name2 {
            margin: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .class-page-container {
              height: auto;
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .class-page-image {
              width: 45%;
              height: 55vh;
            }
            .class-page-container1 {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .class-page-image {
              height: 50vh;
            }
          }
          @media (max-width: 767px) {
            .class-page-container {
              height: auto;
            }
            .class-page-image {
              height: 65vh;
            }
            .class-page-container1 {
              height: auto;
            }
            .class-page-text2 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .class-page-image {
              height: 38vh;
            }
            .class-page-text {
              font-size: 1.5em;
              text-align: center;
            }
            .class-page-text1 {
              font-size: 1em;
            }
            .class-page-text2 {
              color: var(--dl-color-primary-700);
              margin: var(--dl-space-space-unit);
              font-size: 1em;
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

ClassPage.defaultProps = {
  heading: 'Intro to Machine Learning',
  text1: 'Grades: 6-8',
  text: 'Text',
  image_src:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHB5dGhvbnxlbnwwfHx8fDE2OTAxNTUxNTl8MA&ixlib=rb-4.0.3&h=1500',
  rootClassName: '',
  text2:
    'In this class students learn the basics to Artifical Intelligence, as it increasingly becomes more popular students getting the grasp of this technology early will give them a good headstart into this rapidly growing field.',
  image_alt: 'image',
  heading1: 'Intro to Machine Learning',
}

ClassPage.propTypes = {
  heading: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default ClassPage
