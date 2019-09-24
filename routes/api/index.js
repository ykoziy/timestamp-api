const api = require('express').Router();
const currTimestamp = require('./current-timestamp');
const convertTimestamp = require('./timestamp');

api.use('/timestamp/:date_string', convertTimestamp);
api.use('/timestamp', currTimestamp);


module.exports = api;