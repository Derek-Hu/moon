const path = require('path');
const { ParseReadMe } = require('./markdown-transform');

ParseReadMe(path.resolve(__dirname, '../docs'), path.resolve(__dirname, '../src/docs'));
