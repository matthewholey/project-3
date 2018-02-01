require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports = router;