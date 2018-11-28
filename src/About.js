import React, { Component } from "react";
import Scroll from "react-scroll";
import "../public/About.css";
import SectionHeader from "./SectionHeader";
const Element = Scroll.Element;

class About extends Component {
  render() {
    return (
      <Element name="about-element">
        <section className="about-section">
          <SectionHeader title="About Me" />
          <img
            src="https://uploads.codesandbox.io/uploads/user/a0227689-241b-4221-a950-7d9f56c7e1f9/mvDP-Screenshot%20from%202018-11-05%2023-28-31.png"
            className="round-border profile-pic"
            alt="Desmond Harris"
          />
          <div className="about-summary">
            <p>
              I'm a veteran, father of 3 cats (shout out to all my fellow cat
              moms and dads), and a full stack Javascript developer. I've been
              working as a contractor for almost 3 years now, mainly developing
              single page applications for both personal use and small
              businesses for a small web design company based in Birmingham, AL.
            </p>

            <br />

            <p>
              I also spend a lot of time learning cybersecurity, machine
              learning, and embedded systems. Outside of coding I love spending
              time with my cats, fishing, and making friends. I was a propulsion
              engineer in the Air Force, so I am very fasinated with aeronautics
              and space explorations. I wish to some day use my technoligical
              skills to solve environmental issues and learn more about the
              cosmos.
            </p>

            <br />

            <p>
              I hangout in discord a lot so look me up there. You can also feel
              free to hit me up anytime on LinkedIn, Twitter, or find me on
              Github. If you would like to know more about me reach out. Soon I
              will publish a blog that will pretty much be an overview of how I
              got started in cybersecurity and coding, so be on the look out for
              that. I will have a link{" "}
              <a href="https://www.youtube.com/channel/UCPFASxQdUOvbOnynhHYYq8w">
                here
              </a>{" "}
              when it's ready to go.
            </p>
          </div>
        </section>
      </Element>
    );
  }
}

export default About;
