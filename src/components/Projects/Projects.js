import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Heal.ai"
              description="This is a machine learning project which focuses on predicting mental health of a person using effect of phone usage on his daily life as a criteria to predict future outcome."
              ghLink="https://github.com/Brainskull24/Heal.ai"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="relate.ai"
              description="This is a machine learning project which recommends movies on the basis of relativity coefficient according to the keywords you use to search a movie."
              ghLink="https://github.com/Brainskull24/movie-recommender-system"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Codecrafters"
              description="Online code and markdown editor build with react.js and monaco editor. Online Editor which supports html, css, and js code with instant view of website. You can also save your projects and participate in different challenges."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://codecrafterss.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
