import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nimit Garg </span>
            and I am from <span className="purple"> Alwar, Rajasthan.</span>
            <br />
            I am currently pursuing my Bachelors of Engineering in Computer Science with specialization in Internet of Things
            from Chandigarh University.
            My goal is to become a good Software Developer and contribute to our nation.
            <br />
            <br />
            My hobbies are : 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
