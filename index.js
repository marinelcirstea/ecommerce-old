'use strict';
const functions = require('firebase-functions');
const app = require('./build/server/server.js').default;

exports.app = functions.https.onRequest(app);
