import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveEmbed } from 'react-bootstrap';

// renders background vid of the game being played...
// TODO: To be refactored as soon as i can test everything(do it last!!!)
const HomeLayout = () => (
  <div style={{ width: 660, height: 'auto' }}>
    <ResponsiveEmbed a16by9>
      <embed type="video/mp4" src="../../../assets/videos/Miss Clowd.mp4" />
    </ResponsiveEmbed>
  </div>
);

// HomeLayout.propTypes = {};
export default HomeLayout;
