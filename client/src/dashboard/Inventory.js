import React, { Component } from 'react';
import AddItem from './AddItem.js';


class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myItems: {}
		}
	}

    componentDidMount = () => {
		this.setState({myItems: this.props.myItems})
		console.log(this.props.myItems)
    }
	
	render() {
		// var myItemsList = this.props.myItems.map(function(item) {
		// 	return <li key={item.id}>item.itemName</li>
		// });
		return (
			<div>
				<AddItem user={this.props.user} />
				<div className="items">
                	<ul>
						{/* {myItemsList} */}
					</ul>
				</div>
			</div>
		);
	}
};

export default Inventory;