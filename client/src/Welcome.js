import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';

class Welcome extends Component {
	render() {
    	let page = <div></div>;
    	if (this.props.user) {
    		page = (
        		<Dashboard user={this.state.user} setFlash={this.setFlash} />
    		);
    	}
    	else {
    		page = (
		        <div className="welcome">
		        	<Link to="/login">Login</Link>
		        	<Link to="/signup">Sign Up</Link>
		        </div>
    		);
    	}
		return (
			<div>
				{page}
			</div>
		);
	}
};

export default Welcome;