import React, { Component } from 'react';

// Styling
import './SocialIcons.css';

class SocialIcons extends Component {
  /*
  props:
    socials: array of social link info :: [{name::string, icon::img, link::string}]
  */
  render() {
    return (
      <div className="social-icons">
      {this.props.socials.map(social =>
        <SocialIcon name={social.name} icon={social.icon} link={social.link} />
      )}
      </div>
    );
  }
}

class SocialIcon extends Component {
  /*
  props:
    name: name of icon
    icon: image to display
    link: url to link to
  */
  render() {
    return(
      <a href={this.props.link} target="_blank">
        <img className="social-icon" src={this.props.icon} alt={this.props.name}></img>
      </a>
    );
  }
}

export default SocialIcons;
