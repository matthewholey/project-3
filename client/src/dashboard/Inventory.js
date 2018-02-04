import React, { Component } from 'react';
import AddItem from './AddItem';


class Inventory extends Component {
	render() {
		return (
		var NewComponent = React.createClass({
  displayName: "NewComponent",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "text-center" },
        "Items"
      ),
      React.createElement(
        "form",
        { method: "POST", action: "/items" },
        React.createElement(
          "span",
          null,
          React.createElement("input", { name: "title", type: "text", className: "form-control", required: true }),
          React.createElement("input", { className: "btn btn-primary", type: "submit", defaultValue: "Add Item" })
        )
      ),
    	React.item.forEach(this.props.item, (item, i) => {
  		console.log(items + ' at index: ' + i);
})
      
      
      	React.createElement("div", null),
      	React.createElement(
        "h5",
        null,
        React.createElement(
          "a",
          { href: "/item/'(item.id)},
          (item.title)
        )
      ),
      React.createElement(
        "a",
        { href: "/boards/<%= item.id %>", className: "btn btn-danger delete-link" },
        "Delete Item"
      )
    );
  }
});

export default Inventory;
