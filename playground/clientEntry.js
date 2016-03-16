import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import SeedComponent from '../src';

const componentExample = require('raw!./SeedComponent.example');

const Index = () => (
  <div className="component-documentation">
    <Playground codeText={componentExample} scope={{ React, SeedComponent }} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));
