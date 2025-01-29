
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
        I'm Mithun , "I'm an enthusiastic Full Stack Developer with a strong background in creating dynamic and scalable web applications. I enjoy working on cutting-edge projects that push the boundaries of innovation and problem-solving. Driven by a passion for learning, I continuously seek opportunities to refine my expertise and embrace emerging technologies, staying ahead in the fast-paced world of tech."
        </p>
      <div className="about-details">
        <h2 className="details-title">Area of Interest</h2>
        <p className="details-content">Software Engineering</p>
        <p className="details-content">Web Development</p>

        <h2 className="details-title">Hobbies</h2>
        <p className="details-content">Driving</p>
        <p className="details-content">Playing Different games</p>
        <p className="details-content">Exploring New Technologies</p>
      </div>

      <div className="additional-section">
        <h2 className="additional-title">Future Goals</h2>
        <p className="additional-content">
          I aim to become an expert in cloud technologies and contribute to building
          efficient and scalable applications that solve real-world problems. I am
          particularly interested in AI/ML integrations and plan to explore these fields
          further.
        </p>
      </div>
    </div>
  );
}

export default About;

