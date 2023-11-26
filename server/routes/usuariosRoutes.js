const express = require('express');
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);
const router = express.Router();


module.exports = router;
