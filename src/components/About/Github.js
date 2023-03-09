import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "./GithubStyles.css"

function Github() {
  return (
    <Row style={{  padding: "3% 10%", color: "#fff"}}>
        <center>
      <h1 className="project-heading" style={{ paddingBottom: "20px"}}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="saniaahmad6"
        blockSize={15}
        blockMargin={5}
        color="#29A0B1"
        fontSize={16}
      />
      </center>
    </Row>
  );
}

export default Github;