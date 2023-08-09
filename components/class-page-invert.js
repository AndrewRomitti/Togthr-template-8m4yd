import React from 'react'

import PropTypes from 'prop-types'

const ClassPageInvert = (props) => {
  return (
    <>
      <div className={`class-page-invert-container ${props.rootClassName} `}>
        <div className="class-page-invert-container1">
          <h1 className="class-page-invert-text">{props.heading11}</h1>
          <span className="class-page-invert-text1">{props.text11}</span>
          <span className="class-page-invert-text2">{props.text21}</span>
        </div>
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="class-page-invert-image"
        />
      </div>
      <style jsx>
        {`
          .class-page-invert-container {
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
          .class-page-invert-container1 {
            flex: 0 0 auto;
            width: 55%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .class-page-invert-text {
            color: #ffffff;
            font-size: 3em;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .class-page-invert-text1 {
            color: var(--dl-color-gray-700);
            font-size: 2em;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: right;
          }
          .class-page-invert-text2 {
            color: #fffdfd;
            margin: var(--dl-space-space-unit);
            font-size: 2em;
            text-align: center;
          }
          .class-page-invert-image {
            width: 45%;
            height: auto;
            object-fit: cover;
          }
          .class-page-invert-root-class-name {
            margin: var(--dl-space-space-twounits);
          }
          .class-page-invert-root-class-name1 {
            margin: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .class-page-invert-container {
              height: auto;
              margin: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .class-page-invert-container1 {
              height: auto;
            }
            .class-page-invert-image {
              width: 45%;
              height: 55vh;
            }
          }
          @media (max-width: 991px) {
            .class-page-invert-image {
              height: 50vh;
            }
          }
          @media (max-width: 767px) {
            .class-page-invert-container {
              height: auto;
            }
            .class-page-invert-container1 {
              height: auto;
            }
            .class-page-invert-text2 {
              text-align: center;
            }
            .class-page-invert-image {
              height: 65vh;
            }
          }
          @media (max-width: 479px) {
            .class-page-invert-text {
              font-size: 1.5em;
              text-align: center;
            }
            .class-page-invert-text1 {
              font-size: 1em;
            }
            .class-page-invert-text2 {
              color: var(--dl-color-primary-700);
              margin: var(--dl-space-space-unit);
              font-size: 1em;
              align-self: center;
              text-align: center;
            }
            .class-page-invert-image {
              height: 38vh;
            }
          }
        `}
      </style>
    </>
  )
}

ClassPageInvert.defaultProps = {
  rootClassName: '',
  image_src2:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHB5dGhvbnxlbnwwfHx8fDE2OTAxNTUxNTl8MA&ixlib=rb-4.0.3&h=1500',
  heading1: 'Intro to Machine Learning',
  text21:
    'In this class students learn the basics to Artifical Intelligence, as it increasingly becomes more popular students getting the grasp of this technology early will give them a good headstart',
  image_src1:
    'https://images.unsplash.com/photo-1597589827703-f4b68eafa0ce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhcnRpZmljYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8fHwxNjkwMTU1OTIzfDA&ixlib=rb-4.0.3&h=1500',
  text11: 'Grades: 6-8',
  heading11: 'Intro to Machine Learning',
  image_src:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHB5dGhvbnxlbnwwfHx8fDE2OTAxNTUxNTl8MA&ixlib=rb-4.0.3&h=1500',
  image_alt: 'image',
  image_alt2: 'image',
  text2:
    'In this class students learn the basics to Artifical Intelligence, as it increasingly becomes more popular students getting the grasp of this technology early will give them a good headstart',
  text1: 'Grades: 6-8',
  image_alt1: 'image',
  rootClassName1: '',
}

ClassPageInvert.propTypes = {
  rootClassName: PropTypes.string,
  image_src2: PropTypes.string,
  heading1: PropTypes.string,
  text21: PropTypes.string,
  image_src1: PropTypes.string,
  text11: PropTypes.string,
  heading11: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default ClassPageInvert
