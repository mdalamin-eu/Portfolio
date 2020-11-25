import React, { Component } from "react";

import { CenteredHeader } from "./App.js";

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>
           Hi 👋, I'm Karim A Full-stack Software Engineer. based in Helsinki,Finland 🇫🇮.
        </CenteredHeader>
        <p>
          I'm currently 🎯 on <strong>Node.js</strong>, <strong>TypeScript</strong>,
          <strong>React</strong>, <strong>Redux</strong>, <strong>Python</strong>, <strong>Next JS</strong>,
          <strong>NoSQL</strong>, <strong>PostgreSQL</strong>,  <strong>AWS</strong>, and <strong>GraphQL</strong>. Also keeping
          👀 on  <strong>React-native</strong>, <strong>Docker</strong>,<strong>Kubernetes</strong>, and
             <strong>Cloud-native ecosystem</strong> with strong interest.
        </p>
        <p>
        I have been working professionally as a software engineer for 3 years + now. In these years I have helped to create scalable, maintainable, and impactful products in high-volume and fast-paced businesses.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From photography to
          travel, long driving , I'm always trying new ways of expressing
          myself. I also like to meditate, talk to strangers, and run lifestyle
          experiments.
        </p>
      </div>
    );
  }
}

export default Home;
