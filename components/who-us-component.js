import React from 'react'

import PropTypes from 'prop-types'

const WhoUsComponent = (props) => {
  return (
    <>
      <div className={`who-us-component-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="who-us-component-image"
        />
        <div className="who-us-component-container1">
          <h1 className="who-us-component-text">{props.heading}</h1>
          <span className="who-us-component-text1">{props.text}</span>
          <span className="who-us-component-text2">{props.text1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .who-us-component-container {
            width: 40%;
            height: 75vh;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-primary-500);
            border-width: 3px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-primary-700);
          }
          .who-us-component-image {
            width: 45%;
            height: 30vh;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .who-us-component-container1 {
            width: 100%;
            height: 452px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .who-us-component-text {
            margin: var(--dl-space-space-unit);
            align-self: center;
            text-align: center;
          }
          .who-us-component-text1 {
            color: #8a8383;
            margin: var(--dl-space-space-halfunit);
            font-size: 1.75em;
            text-align: center;
            text-transform: uppercase;
          }
          .who-us-component-text2 {
            margin: var(--dl-space-space-unit);
            font-size: 1.5em;
            text-align: center;
          }
          .who-us-component-root-class-name {
            width: 35%;
            margin: var(--dl-space-space-unit);
          }
          .who-us-component-root-class-name1 {
            width: 35%;
            margin: var(--dl-space-space-unit);
          }
          .who-us-component-root-class-name2 {
            width: 35%;
            margin: var(--dl-space-space-unit);
          }
          .who-us-component-root-class-name3 {
            width: 35%;
            margin: var(--dl-space-space-unit);
          }
          .who-us-component-root-class-name4 {
            width: 35%;
            margin: var(--dl-space-space-unit);
          }
          .who-us-component-root-class-name5 {
            width: 35%;
            margin: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .who-us-component-root-class-name {
              align-self: center;
            }
            .who-us-component-root-class-name1 {
              align-self: center;
            }
            .who-us-component-root-class-name2 {
              align-self: center;
            }
            .who-us-component-root-class-name3 {
              align-self: center;
            }
            .who-us-component-root-class-name4 {
              align-self: center;
            }
            .who-us-component-root-class-name5 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .who-us-component-root-class-name {
              width: 75%;
              align-self: center;
            }
            .who-us-component-root-class-name1 {
              width: 75%;
              align-self: center;
            }
            .who-us-component-root-class-name2 {
              width: 75%;
              align-self: center;
            }
            .who-us-component-root-class-name3 {
              width: 75%;
              align-self: center;
            }
            .who-us-component-root-class-name4 {
              width: 75%;
              align-self: center;
            }
            .who-us-component-root-class-name5 {
              width: 75%;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .who-us-component-root-class-name {
              width: 90%;
            }
            .who-us-component-root-class-name1 {
              width: 90%;
            }
            .who-us-component-root-class-name2 {
              width: 90%;
            }
            .who-us-component-root-class-name3 {
              width: 90%;
            }
            .who-us-component-root-class-name4 {
              width: 90%;
            }
            .who-us-component-root-class-name5 {
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

WhoUsComponent.defaultProps = {
  image_alt: 'image',
  heading: 'Heading',
  text: 'Text',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxQZXJzb258ZW58MHx8fHwxNjg5OTgxNDA0fDA&ixlib=rb-4.0.3&h=1500',
  text1: 'Text',
}

WhoUsComponent.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
}

export default WhoUsComponent
