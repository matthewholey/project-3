require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

// POST - create item - take user input for itemName and add current user's id + username to establish ownership
router.post("/inventory", function(req, res, next) {
	var data = {
		itemName: req.body.itemName,
		ownerId: req.body.userId,
		ownerUsername: req.body.username,
		requests: [],
		isBorrowed: false
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

// GET - get all items from items collection where the ownerId matches the current user's _id, render item data for inventory
router.get("/inventory", function(req, res, next) {
	Item.find({
		ownerId: req.body.user.id
	}).then(function(items) {
		console.log(items);
		res.send("dashboard/inventory", {items: items});
	});
});

// GET - render all items besides current user's items on available page
router.get("/all", function(req, res, next) {
	Item.find({
		ownerId: {$not: req.body.user.id}
	}).then(function(items) {
		console.log(items);
		res.render("dashboard/all", {items: items});
	});
});

// POST - add username to requests array in corresponding item object/document
router.post("/dashboard/all", function(req, res, next) {
	var requests = Item.requests;
	var request = new mongoose.Schema({username: String});
	request.update({
		$set: {username: req.body.user.username}
	}).then(function() {
		requests.update({
			$push: {request}
		});
	});
});

// /* Owner (current user) confirms one request, item is borrowed */
// // POST - add selected user's username from the requests array to borrower.username in item object/document, change isBorrowed boolean value to true
// router.post("dashboard/inventory or requests", function(req, res, next) {
// 	Item.findOne({})
// })
// // POST - all requests in the requests array are cleared
router.post("dashboard/inventory or requests", function(req, res, next) {
	Item.update({
		$set: {requests: []}
	});
});

// /* Borrower ready to return item to owner */
// // POST - change borrower.isFinished status from false to true
// router.post("dashboard/borrowing", function(req, res, next) {
// 	Item.findOneAndUpdate({})
// })

// /* Owner confirms possession/return of item, item returns to default state */
// // POST - change isBorrowed back to default (false)
// router.post("dashboard/lending", function(req, res, next) {
// 	Item.findOneAndUpdate({})
// })
// // DELETE - delete borrower object
// router.delete("dashboard/lending", function(req, res, next) {
// 	Item.findOneAndRemove({})
// })

// /* Owner decides to take item off of app if in inventory */
// // DELETE - delete item
// router.delete("dashboard/inventory", function(req, res, next) {
// 	Item.findOneAndRemove({})
// })

module.exports = router;