import React from 'react'

import PropTypes from 'prop-types'

import Slideshow2 from './slideshow2'

const Slideshow1 = (props) => {
  return (
    <>
      <div className="slideshow1-container">
        <Slideshow2 rootClassName="slideshow2-root-class-name"></Slideshow2>
        <button type="button" className="button slideshow1-button">
          {props.button1}
        </button>
        <button type="button" className="slideshow1-button1 button">
          {props.button}
        </button>
        <Slideshow2 rootClassName="slideshow2-root-class-name1"></Slideshow2>
      </div>
      <style jsx>
        {`
          .slideshow1-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .slideshow1-button1 {
            transition: 0.3s;
          }

          @media (max-width: 1200px) {
            .slideshow1-container {
              width: 60%;
              height: 700px;
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .slideshow1-button {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-right: var(--dl-space-space-sixunits);
            }
            .slideshow1-button1 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-right: var(--dl-space-space-sixunits);
            }
          }
        `}
      </style>
    </>
  )
}

Slideshow1.defaultProps = {
  button: 'Button',
  button1: 'Button',
}

Slideshow1.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Slideshow1
