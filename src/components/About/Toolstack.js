import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Techicons.css"
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className="icons-tools-container" style={{justifyContent: "center", paddingBottom: "2%" }}>
        
      <Col xs={6} md={4} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <SiHeroku />
      </Col>
      
    </Row>
  );
}

export default Toolstack;