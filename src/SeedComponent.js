import React, { Component, PropTypes } from 'react';

import styles from './styles';

export default class SeedComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;

    return (
      <div style={styles.div}>
        { text || 'Hay.'}
      </div>
    );
  }
}
