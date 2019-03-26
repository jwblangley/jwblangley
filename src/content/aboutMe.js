import React, { Component } from 'react';
import SocialIcons from '../components/SocialIcons.js';

export function generateAboutMe() {
  return(
    <div>
      <h1>About Me</h1>
      <div>
        <p>
          Hi, I&#39;m James
          <br></br> <br></br>
          I&#39;m a 2nd year student at <a href="https://www.imperial.ac.uk/" target="_blank">Imperial College London</a> working towards an MEng in Computing.
          <br></br> <br></br>
          I&#39;m strongest at writing Java applications, but am well-versed in many languages:
          <br></br>
          Java, C, C++, Python, JavaScript, Haskell, C#, HTML+CSS
          <br></br>
          <br></br>
          My other interests include Hockey, Photography and Scuba Diving.
          <br></br>
          <br></br>
        </p>
      </div>
    </div>
  );
}

// TODO: Image
