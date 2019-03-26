import React, { Component } from 'react';

// Components
import HeaderDisplay from './components/HeaderDisplay.js'
import NavBar from './components/NavBar.js'

// Content
import {generateAboutMe} from './content/aboutMe.js'

// Styling
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderDisplay />
        <div className="content">
          {generateAboutMe()}
        </div>
      </div>
    );
  }
}

export default App;
