import React, { Component } from 'react';
import AddItem from './AddItem';


class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: this.state.itemName
		}
	}
	
	render() {
		var itemList = items.forEach(function(item) {
			<li>item.itemName</li>
		});
		return (
			<div>
				<AddItem user={this.props.user} />
				<div>
					<h1>Inventory</h1>
					<div>
						<h2>Items you have to lend out.</h2>
						<div className="items">
							<ul>
								{itemList}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Inventory;