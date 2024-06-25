import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codecrafters from "../../Assets/codecrafters.png"
import jntalks from "../../Assets/jntalks.png"
import saathi from "../../Assets/saathi.png"
import suppliez from "../../Assets/suppliez.png"
import healai from "../../Assets/healai.png"
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
              imgPath={saathi}
              isBlog={false}
              title="Saathi.com"
              description="This platform empowers researchers & creators to collaborate effectively, providing project management features like team management and collaborative development. It ensures a secure and user-friendly environment for successfull implementation."
              ghLink="https://github.com/Brainskull24/Saathi.com"
              demoLink="https://saathii.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jntalks}
              isBlog={false}
              title="JNTalks"
              description="Join Nimit Talks is a robust Zoom clone developed using Stream.io and Next.js. This platform offers seamless video conferencing capabilities, real-time chat, and collaborative features, providing users with an efficient and reliable virtual meeting experience."
              ghLink="https://github.com/Brainskull24/JNTalks"
              demoLink="https://jntalks.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codecrafters}
              isBlog={false}
              title="Codecrafters"
              description="Online code and markdown editor build with react.js and monaco editor. Online Editor which supports html, css, and js code with instant view of website. You can also save your projects and participate in different daily challenges and quizzes."
              ghLink="https://github.com/Brainskull24/CODECRAFTERS"
              demoLink="https://codecrafterss.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suppliez}
              isBlog={false}
              title="Suppliez"
              description="Suppliez is a student-focused grocery store platform built with the MERN stack. It features an intuitive user interface and an efficient admin dashboard for seamless order management. Designed to cater to university communities, Suppliez ensures a smooth and convenient shopping experience for students."              
              ghLink="https://github.com/Brainskull24/Suppliez"
              // demoLink="https://saathii.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healai}
              isBlog={false}
              title="Heal.ai"
              description="This is a machine learning project which focuses on predicting mental health of a person using effect of phone usage on his daily life as a criteria to predict future outcome."
              ghLink="https://github.com/Brainskull24/Heal.ai"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
