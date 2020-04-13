import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-message">
          {" "}
          <p>Employee Directory</p>
          <h1>Use the search fields to modify results</h1>
        </div>
      </header>
    );
  }
}

export default Header;