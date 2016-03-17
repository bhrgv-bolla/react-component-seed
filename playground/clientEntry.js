import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import SeedComponent from '../src';

const SeedComponentExample = require('raw!../src/SeedComponent.example');

const Index = () => (
  <div className="component-documentation">
    <Playground codeText={SeedComponentExample} scope={{ React, SeedComponent }} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));

if (__ONBUILD_REACT_PERF__) {
  window.Perf = require('react-addons-perf');
}
