import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Inventory from './dashboard/Inventory.js';
import Needed from './dashboard/Needed.js';

class Dashboard extends Component {
  render() {
    if (this.props.user && this.props.user.name) {
      return (
        <div>
          <Link to="/lending">Lending</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/borrowing">Borrowing</Link>

          <Inventory />
          <Needed />
        </div>
      );
    }
    else {
      return (<p>This is the Dashboard. You need to be logged in to view it.</p>);
    }
  }
};

export default Dashboard;