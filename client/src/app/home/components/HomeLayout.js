import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveEmbed } from 'react-bootstrap';

// renders background vid of the game being played...
// TODO: To be refactored as soon as i can test everything(do it last!!!)
const HomeLayout = (props) => (
  <div style={{ width: 660, height: 'auto' }}>
    <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="../../../assets/TheresaKnott_castle.svg" />
    </ResponsiveEmbed>
  </div>
);

HomeLayout.propTypes = {};
export default HomeLayout;
