import React, { Component } from 'react';
import AddItem from './AddItem';


class Inventory extends Component {
	var NewComponent = React.createClass({
  	render: function() {
    	return (
      // Class to represent a row in the seat reservations grid
	function Inventory(name, initialItem) {
	    var self = this;
	    self.name = name;
	    self.items = ko.observable(initialItem);

    	self.formattedPrice = ko.computed(function () {
		var price = self.item().price;
		return price ? "$" + price.toFixed(2) : "None";
	    });
	}

		// Overall viewmodel for this screen, along with initial state
		function InventoryViewModel() {
		    var self = this;

    			// Non-editable catalog data - would come from the server
	    		self.availableMeals = [{ itemName: "" }];

	   			// Editable data
		    		self.users = ko.observableArray([new Inventory("", self.availableItems[0])]);

		

					// Operations
				    self.addUser = function () {
					self.user.push(new Inventory("", self.availableUsers[0]));
				    };
			    self.removeUser = function (user) {
				self.users.remove(user);
			    };
			}

ko.applyBindings(new InventoryViewModel());

export default Inventory;

