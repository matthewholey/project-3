import React, { Component } from 'react';
import AddItem from './AddItem';


		class Inventory extends Component {
			constructor(props) {
			super(props);
			this.state = {
				item: ''
				      }
				    }
				// Class to represent a row in the grid
		function Inventory(name, initialItem) {
		    var self = this;
		    self.itemName = name;
		    self.items = ko.observable(initialItem);

		// Overall viewmodel for this screen, along with initial state
		function InventoryViewModel() {
		    var self = this;

		    // Non-editable catalog data - would come from the server
		    self.availableItems = [{ itemName: "" }];

		    // Editable data
		    self.user = ko.observableArray([new Inventory("", self.availableItems[0])]);


		    // Operations
		    self.addAdd = function () {
		        self.item.push(new Inventory("", self.availableItems[0]));
		    };
		    self.removeItem = function (item) {
		        self.items.remove(item);
		    };
		}

		ko.applyBindings(new InventoryViewModel());

		render() {
			return (
				<h2>Your Inventory (<span data-bind="text: items().length"></span>)</h2>

				<table>
				    <thead><tr>
				        <th>Inventory</th><th>Item</th><th>Amount</th><th></th>
				    </tr></thead>
				    <tbody data-bind="foreach: item">
				        <tr>
				            <td><input data-bind="value: name" /></td>
				            <td><select data-bind="options: $root.availableItems, value: item, optionsText: 'itemName'"></select></td>
				            <td data-bind="text: formattedValue"></td>
				            <td><a href="#" data-bind="click: $root.removeItem">Remove</a></td>
				        </tr>
				    </tbody>
				</table>

				<button data-bind="click: addItem, enable: items().length < 5">Add To Inventory</button>

export default Inventory;


