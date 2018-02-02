import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======

import Dashbar from './dashboard/Dashbar.js';

import Borrowing from './dashboard/Borrowing.js';
>>>>>>> 357e8ce203006ecfd045a8399e3da8fc9b326c91
import Inventory from './dashboard/Inventory.js';
import Lending from './dashboard/Lending.js';

import Welcome from './Welcome.js';

class Dashboard extends Component {
  render() {
    let page = <div></div>
    if (this.props.user && this.props.user.name) {
      page = (
        <div>
<<<<<<< HEAD
          <header className="App-header">
            <Link to="/lending"> Lending </Link>
            <Link to="/inventory"> Inventory </Link>
            <Link to="/borrowing"> Borrowing </Link>
          </header>
          <Inventory />
          <Needed />
=======
          <Dashbar />
          <div>
            <Link to="/needed">Needed</Link>
            <div>
              <Inventory user={this.props.user} />
              <div>
                <Lending />
                <Borrowing />
              </div>
            </div>
          </div>
>>>>>>> 357e8ce203006ecfd045a8399e3da8fc9b326c91
        </div>
      );
    }
    else {
      <Welcome />
    }
    return (
      <div>
        {page}
      </div>
    );
  }
};

export default Dashboard;
