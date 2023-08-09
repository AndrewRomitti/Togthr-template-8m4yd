import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className={`component1-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component1-image"
        />
        <h1 className="component1-text">{props.heading}</h1>
        <span className="component1-text1">{props.text}</span>
        <span className="component1-text2">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 60%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-primary-300);
          }
          .component1-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }
          .component1-text {
            color: #ffffff;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
          }
          .component1-text1 {
            color: var(--dl-color-primary-700);
            font-size: 23px;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .component1-text2 {
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
            .component1-container {
              width: 60%;
            }
            .component1-root-class-name {
              width: 100%;
            }
            .component1-root-class-name3 {
              width: 60%;
              align-self: flex-end;
            }
            .component1-root-class-name4 {
              width: 60%;
              align-self: flex-end;
            }
            .component1-root-class-name5 {
              width: 60%;
            }
          }
          @media (max-width: 479px) {
            .component1-container {
              height: 500px;
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  heading: 'Introduction to Python',
  text1:
    'Students will explore the beginnings of python, the most popular programming language in the world. This course will cover the basic fundamenta synatax, along with projects',
  image_alt: 'image',
  text: 'Grades: 6-8',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Component1.propTypes = {
  heading: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component1
