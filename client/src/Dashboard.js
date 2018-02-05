import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Dashbar from './dashboard/Dashbar.js';

import Borrowing from './dashboard/Borrowing.js';
import Inventory from './dashboard/Inventory.js';
import Lending from './dashboard/Lending.js';

import Welcome from './Welcome.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    }
  }

  componentDidMount = () => {
    this.getItems();
  }

  getItems = () => {
    axios.get("/dashboard/inventory", {
      items: items
    }).then(response => {
      localStorage.setItem("items", response.data.items);
      this.setState({
        items: response.data.items
      });
    });
  }

  render() {
    let page = <div></div>
    if (this.props.user && this.props.user.name) {
      page = (
        <div>
          <Dashbar />
          <div>
            <Link to="/needed">Needed</Link>
            <div>
              <Inventory user={this.props.user} items={this.props.items} />
              <div>
                <Lending user={this.props.user} items={this.props.items} />
                <Borrowing user={this.props.user} items={this.props.items} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      page = <Welcome />
    }
    return (
      <div>
        {page}
      </div>
    );
  }
};

export default Dashboard;