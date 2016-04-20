# SeedComponent [![Build Status](https://travis-ci.org/hourliert/react-component-seed.svg?branch=develop)](https://travis-ci.org/hourliert/react-component-seed)

This project is a generic react component. It comes with a playground where you can test it.
All the build process is handled by [builder-react-comp](https://github.com/hourliert/builder-react-comp).

## Getting started

To start the playground, simply run:

```
npm install
npm start 
```

The playground has **react-hot-reload** so you can edit your component in real time.

## Project structure
* `./src`: Source code
* `./src/__tests__/`: Test code 
* `./playground`: Playground source code
* `./types`: Additionnal typescript definition files

## Tasks
* `npm start`: Start the playground and compile the component on file change
* `npm test`: Run all component tests in **jest**
* `npm run lint`: Lint the code of the component
* `npm run tdd`: Run all component tests in watch mode
* `npm run release -- -- semverComptaibleString`: Create a new component version. Check [here](https://github.com/hourliert/builder-react-comp/blob/master/README.md#release-the-component) to see how it works
