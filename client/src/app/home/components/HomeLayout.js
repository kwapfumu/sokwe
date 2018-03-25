import React from 'react';
// import PropTypes from 'prop-types';
import { ResponsiveEmbed } from 'react-bootstrap';
import shortDemo from '../../../assets/videos/MissClowd.mp4';
// renders background vid of the game being played...
// TODO: To be refactored as soon as i can test everything(do it last!!!)
const HomeLayout = () => {
  return (
    <div style={{ width: 660, height: 'auto' }}>
      <h4>HomeLayout rendering!</h4>
      <ResponsiveEmbed a16by9>
        <embed type="video/mp4" src={shortDemo} />
      </ResponsiveEmbed>
    </div>
  );
};

// HomeLayout.propTypes = {};
export default HomeLayout;
