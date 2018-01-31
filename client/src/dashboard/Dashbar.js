import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashbar extends Component {
	render() {
		return (
			<header className="App-header">
        		<Link to="/dashboard/lending">Lending</Link>
        		<Link to="/dashboard/inventory">Inventory</Link>
        		<Link to="/dashboard/borrowing">Borrowing</Link>
        	</header>
		);
	}
}

export default Dashbar;