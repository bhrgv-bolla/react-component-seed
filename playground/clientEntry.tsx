import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Playground from 'component-playground';
import SeedComponent from '../src';

const SeedComponentExample: string = require('raw!../src/SeedComponent.example');

const Index = () => (
  <div className="component-documentation">
    <Playground codeText={SeedComponentExample} scope={{ React, SeedComponent }} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));
