import React, { Component } from 'react';
import AddItem from './AddItem';


class Inventory extends Component {
	render() {
		return (
			<div>
				<AddItem />
				<div>
					<h1>Inventory</h1>
					<div>
						<h2>Items you have to lend out.</h2>
						<div className="items">
							<h3>Item</h3>
							<h3>Item</h3>
							<h3>Item</h3>
							<h3>Item</h3>
							<h3>Item</h3>
							<h3>Item</h3>
							<h3>Item</h3>
							<h3>Item</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Inventory;