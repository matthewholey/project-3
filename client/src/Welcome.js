import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Welcome extends Component {
	render() {
    	if (this.props.user) {
        	return (<Redirect to="/dashboard/inventory" />);
    	}
    	else {
			return (
				<div className="welcome">
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
				</div>
			);
    	}
	}
};

export default Welcome;