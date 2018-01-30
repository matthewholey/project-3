import React, { Component } from 'react';
import Logout from '../auth/Logout.js';

class Hamburger extends Component {
	render() {
		return (
          <Logout updateUser={this.props.updateUser} />
		);
	}
};

export default Hamburger;