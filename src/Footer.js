import React, { Component } from "react";
import Social from "./Social";
import "../public/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Social iconColor="icon-white" />
        <p>&copy;Desmond Harris</p>
      </footer>
    );
  }
}

export default Footer;
