import React, { Component } from "react";
import "../public/Social.css";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: "GitHub",
          image: "./images/github.png",
          fa: "fa-github",
          link: "https://github.com/MisterUniverse"
        },
        {
          name: "Stack Overflow",
          image: "./images/stackoverflow.png",
          fa: "fa-stack-overflow",
          link: "https://stackoverflow.com/users/10548525/desmond-harris"
        },
        {
          name: "Twitter",
          image: "./images/twitter.png",
          fa: "fa-twitter",
          link: "https://twitter.com/Desmond84974857"
        },
        {
          name: "Codepen",
          image: "./images/medium.png",
          fa: "fab fa-codepen",
          link: "https://codepen.io/MisterUniverse/"
        },
        {
          name: "LinkedIn",
          image: "./images/linkedin.png",
          fa: "fa-linkedin",
          link: "https://www.linkedin.com/in/desmond-harris"
        }
      ]
    };
  }

  render() {
    const socialLinks = this.state.socialLinks;
    return (
      <div className="social-links">
        {socialLinks.map(social => (
          <div className="social-link" key={social.name}>
            <a
              href={social.link}
              className={this.props.iconColor}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*<img src={social.image} alt={social.name}/> */}
              <i className={`fa ${social.fa}`} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Social;
