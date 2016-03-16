import React, { PropTypes } from 'react';

import styles from './styles';

function SeedComponent({ text }) {
  return (
    <div style={styles.div}>
      { text || 'Hay.'}
    </div>
  );
}

SeedComponent.propTypes = {
  text: PropTypes.string,
};

export default SeedComponent;
