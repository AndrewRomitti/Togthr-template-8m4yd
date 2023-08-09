import React from 'react'

import PropTypes from 'prop-types'

const Slideshow2 = (props) => {
  return (
    <>
      <div className={`slideshow2-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="slideshow2-image"
        />
        <h1 className="slideshow2-text">{props.heading}</h1>
        <span className="slideshow2-text1">{props.text1}</span>
        <span className="slideshow2-text2">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .slideshow2-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: #ae37d2;
          }
          .slideshow2-image {
            width: 200px;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .slideshow2-container {
              width: 60%;
              height: 450px;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
              background-color: var(--dl-color-primary-300);
            }
            .slideshow2-image {
              width: 100%;
              height: 35%;
            }
            .slideshow2-text {
              color: #ffffff;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .slideshow2-text1 {
              color: #ebe7e7;
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
            }
            .slideshow2-text2 {
              color: #ffffff;
              width: 90%;
              height: 40%;
              font-size: 20px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .slideshow2-root-class-name {
              width: 100%;
              height: 450px;
            }
            .slideshow2-root-class-name1 {
              width: 100%;
              height: 450px;
            }
          }
          @media (max-width: 479px) {
            .slideshow2-container {
              width: 70%;
              height: 600px;
            }
            .slideshow2-text {
              text-align: center;
            }
            .slideshow2-text1 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Slideshow2.defaultProps = {
  image_alt11: 'image',
  text1: 'Grades: 5-8',
  image_alt2: 'image',
  heading: 'Introduction to Python',
  image_src12:
    'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxwZXJzb258ZW58MHx8fHwxNjg5OTczOTU2fDA&ixlib=rb-4.0.3&w=200',
  text2:
    'Students will discover the foundations of Python, the most popular programming language in the world! In this introduction class, this will cover hands on projects, lectures, and the basics that a student will need to have a strong foundation for a great future',
  image_src13:
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&ixlib=rb-4.0.3&w=200',
  image_src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&ixlib=rb-4.0.3&w=200',
  button: 'Course Outline',
  image_src2:
    'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixid=M3w5MTMyMXwxfDF8YWxsfDE0fHx8fHx8Mnx8MTY4OTk3Mzk1NHw&ixlib=rb-4.0.3&w=1500',
  image_alt: 'image',
  image_src11:
    'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxwZXJzb258ZW58MHx8fHwxNjg5OTczOTU2fDA&ixlib=rb-4.0.3&w=200',
  rootClassName: '',
  text: 'Text',
  image_alt1: 'image',
  image_alt12: 'image',
  image_src1:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&ixlib=rb-4.0.3&w=200',
  image_alt13: 'image',
}

Slideshow2.propTypes = {
  image_alt11: PropTypes.string,
  text1: PropTypes.string,
  image_alt2: PropTypes.string,
  heading: PropTypes.string,
  image_src12: PropTypes.string,
  text2: PropTypes.string,
  image_src13: PropTypes.string,
  image_src: PropTypes.string,
  button: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src11: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt12: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt13: PropTypes.string,
}

export default Slideshow2
