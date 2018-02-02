require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var user = mongoose.model('User').Schema;
var userId = User.findOne({"_id": user._id}, {"_id": 1});

//POST - create item/add item to inventory
router.post("/dashboard/inventory", function(req, res, next) {
	var data = {
		itemName: req.body.itemName,
		ownerId: req.userId,
		isBorrowed: []
	};
	console.log("data = " + JSON.stringify(data));
	Item.create(data, function(err, item) {
        if (err){
          console.log('DB error', err);
          res.status(500).send({error: true, message: 'Database Error - ' + err.message});
        }
        else {
          res.send({item: item});
        }
    });
});

module.exports = router;