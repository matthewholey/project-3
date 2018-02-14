import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
      myItems: {},
      otherItems: {}
    }
  }

  componentDidMount = () => {
    this.getMyItems();
    // this.getOtherItems();
  }

  getMyItems = () => {
    console.log("User data: " + this.props.user)
    axios.get("/dashboard", {
      myItems: this.state.myItems
    }).then((response) => {
      localStorage.setItem("myItems", response.data.myItems);
      this.setState({
        myItems: response.data.myItems
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
            <Inventory user={this.props.user} myItems={this.props.myItems} />
            <div>
              <Lending user={this.props.user} myItems={this.props.myItems} />
              <Borrowing user={this.props.user} otherItems={this.props.otherItems} />
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        {page}
      </div>
    );
  }
};

export default Dashboard;