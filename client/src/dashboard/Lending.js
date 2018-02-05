import React, { Component } from 'react';


class Lending extends Component {
  constructor() {
    super();
    this.state = {
      item: {
        name: '',
        description: ''
        
      },
     
    };
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showModal !== this.props.showModal && nextProps.showModal) {
      this.setState({
        item: {
          name: '',
          description: '',
          images: [],
        },
        imagesInfo: [],
      });
    }
  }

  onFieldChanged(event) {
    const { item } = this.state;
    item[event.target.name] = event.target.value;
    this.setState({ item });
  }

  addItem(event) {
    event.preventDefault();
    const { item } = this.state;
    this.props.AddItem(item);
  }

  
  	render() 
        	<div className="header">
          <button type="button" className="close" name="ItemName" onClick={onHide}>X</button>
          <h3 id="AddItem">Add Item</h3>
        </div>
        <div className="body">
          <form
            onSubmit={this.addItem}>
            <div className="form-group">
              <label htmlFor="addNameInput">Name</label>
              <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={this.onFieldChanged} />
            </div>
            <div className="form-group">
              <label htmlFor="addDescriptionInput">Description</label>
              <input type="text" className="form-control" name="description" placeholder="Enter description" onChange={this.onFieldChanged} />
            </div>
            </ul>
            <button type="submit" className="btn btn-default" onChange={this.addItem}>Add</button>
            <span> { error } </span>
          </form>
        </div>
      </Modal>
    );
  }
}


export default Lending;
