'use strict';
const path = require('path');
module.exports = {
  modify(config, { target, dev, fs }) {
    const appConfig = config; // stay immutable here

    if (target === 'node' && !dev) {
      appConfig.entry = path.resolve(__dirname, './src/server/index.js');
      appConfig.output.filename = 'server.js';
      appConfig.output.path = path.resolve(__dirname, './build/server');
      appConfig.output.libraryTarget = 'commonjs2';
    }

    return appConfig;
  },
};
