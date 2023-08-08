import React from 'react'

import PropTypes from 'prop-types'

import './class-page-invert.css'

const ClassPageInvert = (props) => {
  return (
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
