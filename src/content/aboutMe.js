import React, { Component } from 'react';
import SocialIcons from '../components/SocialIcons.js';

// Images
import emailIcon from './icons/email.svg';
// email icon source: myself
import linkedInIcon from './icons/linkedIn.svg';
// linkedIn icon source: https://www.iconfinder.com/icons/317725/linkedin_social_icon
import twitterIcon from './icons/twitter.svg';
// Twitter icon source: https://www.iconfinder.com/icons/294709/circle_twitter_icon
import githubIcon from './icons/github.svg';
// GitHub icon source: https://www.iconfinder.com/icons/298822/github_mark_icon
import instagramIcon from './icons/instagram.svg';
// Instagam icon source: https://www.iconfinder.com/icons/2609558/instagram_media_social_icon
import fivePixIcon from './icons/500px.svg';
// 500px icon source: https://www.iconfinder.com/icons/1356545/500px_icon

// Social Links
var socials = [
  {
    name: "email",
    icon: emailIcon,
    link: "mailto:jwblangley@gmail.com"
  },
  {
    name: "linkedIn",
    icon: linkedInIcon,
    link: "https://www.linkedin.com/in/jwblangley"
  },
  {
    name: "github",
    icon: githubIcon,
    link: "https://github.com/jwblangley"
  },
  {
    name: "twitter",
    icon: twitterIcon,
    link: "https://twitter.com/langers800"
  },
  {
    name: "instagram",
    icon: instagramIcon,
    link: "https://instagram.com/jwblangley.jpg"
  },
  {
    name: "500px",
    icon: fivePixIcon,
    link: "https://500px.com/jwblangley"
  }
];

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
          Find me online here:
          <SocialIcons socials={socials}/>
        </p>
      </div>
    </div>
  );
}

// TODO: Image
