import React from 'react';
// import PropTypes from 'prop-types'; ResponsiveEmbed
// import { Grid } from 'react-bootstrap';
import shortDemo from '../../../assets/videos/MissClowd.mp4';
import { demoVid } from '../scss/home.scss';
// renders background vid of the game being played...
// TODO: replace with the appropriate video
const HomeLayout = () => {
  return (
    <div className={demoVid} >
      <video id="background-video" loop autoPlay muted> {/* eslint-disable-line jsx-a11y/media-has-caption */}
        <source src={shortDemo} type="video/mp4" />
      </video>
    </div>
  );
};

// HomeLayout.propTypes = {};
export default HomeLayout;
