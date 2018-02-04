import React, { Component } from 'react';

class Borrowing extends Component {
	class BorrowItem extends Component {
  constructor() {
    super();
    this.state = {
      item: {
        name: '',
        description: ''
       
      },
	    //layout
	render() {
	  return (
        <div className="header">
          <button type="button" className="close" name="Borrowing" onClick={onHide}>×</button>
          <h3 id="AddItem">Add Item</h3>
        </div>
        <div className="body">
          <form onSubmit={this.addItem}>
            <div className="form-group">
              <label="Name">Name</label>
              <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={this.onFieldChanged} />
            </div>
		  //add description?
            <div className="form-group">
              <label htmlFor="addDescriptionInput">Description</label>
              <input type="text" className="form-control" name="description" placeholder="Enter description" onChange={this.onFieldChanged} />
            </div>          
            </ul>
            <button type="submit" className="btn btn-default" onChange={this.addItem}>Add</button>
            <span> { error } </span>
          </form>
        </div>
      
    );
  }
}

export default Borrowing;
