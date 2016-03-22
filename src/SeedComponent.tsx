import * as React from 'react';

import styles from './styles';

export interface SeedComponentProps {
  text?: string;
}

export default class SeedComponent extends React.Component<SeedComponentProps, void> {
  render() {
    const { text } = this.props;

    return (
      <div style={styles.div}>
        Prejkwehfkjhfix
        { text || 'Hay.'}
      </div>
    );
  }
}
