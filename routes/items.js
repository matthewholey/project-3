require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// POST - create item - take user input for itemName and add current user's id to establish ownership
router.post("/dashboard/inventory", function(req, res, next) {
	var data = {
		itemName: req.body.itemName,
		ownerId: req.body.userId,
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
    }).then(function() {
    	res.redirect("/dashboard/inventory");
    }).catch(function(status, body){
		res.status(500).send(body);
	});
});

// GET - get item from items collection in db and render in inventory component
router.get("/dashboard/inventory", function(req, res, next) {
	Item.findAll({
		where: {
			ownerId: req.body.id
		}
	}).then(function(items) {
		console.log(items);
		res.render("/dashboard/inventory", {items: items});
	});
});

// POST - add other user object/document to requests array in corresponding item object/document

/* Owner (current user) confirms one request */
// POST - add selected user id as value to reqConfirmed key in item object/document
// DELETE - upon selected user confirmation all requests in the requests array are cleared

/* Prospecive borrower can then confirm upon recieving item, becomes borrower */
// POST - add selected user id to borrowerId

/* Borrower ready to return item to owner */
// PUT - change borrowerDone status from false to true

/* Owner confirms possession/return of item, item returns to default state */
// DELETE - delete selected user id from borrowerId

/* Owner decides to take item off of app if in inventory and not borrowed */
// DELETE - delete item

module.exports = router;