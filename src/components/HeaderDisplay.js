import React, { Component } from 'react';
import logo from '../img/jl.png';
// TODO: Replace with svg.

class HeaderDisplay extends Component {
  render() {
    return (
      <div className="title-header">
        <img src={logo} className="title-logo" alt="logo" />
          <div className="title-text">
          <h1>
            James Langley
          </h1>
          <h2>
            Computer Scientist and Programmer
          </h2>
        </div>
      </div>
    );
  }
}

export default HeaderDisplay;
