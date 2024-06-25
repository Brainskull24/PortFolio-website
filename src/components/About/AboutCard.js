import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Throughout my academic journey, I have garnered a CGPA of 8.18 and
            developed a solid foundation in advanced data structures,
            object-oriented programming, operating systems, and database
            management systems. My programming skills span across multiple
            languages including C++, Python, JavaScript, HTML, and CSS, and I am
            proficient in databases such as SQL and MongoDB.
            <br />
            <br />
            My professional experience includes a stint as a Full Stack
            Developer at Wictronix, where I played a key role in developing a
            comprehensive e-commerce platform. This role honed my skills in the
            MERN stack and reinforced my commitment to creating secure,
            user-friendly digital solutions.
            <br />
            <br />
            My hobbies are :
            <ul>
              <li className="about-activity">Creating Interactive Webpages</li>
              <li className="about-activity">Listening Bollwood Music</li>
              <li className="about-activity">Playing Badminton</li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
