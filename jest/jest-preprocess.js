const babelOptions = {
  presets: ['@babel/react', '@babel/env', 'babel-preset-gatsby'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
  ],
};

// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').default.createTransformer(babelOptions);
