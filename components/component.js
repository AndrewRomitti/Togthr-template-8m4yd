import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component-image"
        />
        <h1 className="component-text">{props.heading}</h1>
        <span className="component-text1">{props.text}</span>
        <span className="component-text2">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component-container {
            width: 60%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-primary-300);
          }
          .component-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }
          .component-text {
            color: #ffffff;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .component-text1 {
            color: var(--dl-color-primary-700);
            font-size: 23px;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .component-text2 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .component-container {
              width: 60%;
            }
          }
          @media (max-width: 479px) {
            .component-container {
              height: 500px;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  heading: 'Introduction to Python',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Grades: 6-8',
  text1:
    'Students will explore the beginnings of python, the most popular programming language in the world. This course will cover the basic fundamenta synatax, along with projects',
  rootClassName: '',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
