import React from 'react'

import PropTypes from 'prop-types'

import './class-page.css'

const ClassPage = (props) => {
  return (
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
    'In this class students learn the basics to Artifical Intelligence, as it increasingly becomes more popular students getting the grasp of this technology early will give them a good headstart',
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
