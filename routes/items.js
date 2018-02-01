require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

//POST - create item/add item to inventory
router.post("/inventory", function(req, res, next) {
	console.log("Posting 'item' object to items array in user object/doc in users collection.");
	Item.create({
		itemName: req.body.itemName,
		ownerId: User._id,
		isBorrowed: []
	}, function(err, item) {
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