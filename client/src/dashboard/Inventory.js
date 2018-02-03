import React, { Component } from 'react';
import AddItem from './AddItem';


class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
				<AddItem user={this.props.user} />
				<div>
					<h1>Inventory</h1>
					<div>
						<h2>Items you have to lend out.</h2>
						<div className="items">
							<h3>Item</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Inventory;