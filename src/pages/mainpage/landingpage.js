import { Button, Container, Row } from "react-bootstrap";
import React from "react";
import "./landingpage.css";

const landingpage = () => {
  return (
    <div>
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="tittle">Welcome to Note Zipper</h1>
                <p className="subtittle">One safe place all your notes.</p>
              </div>
              <div className="buttonContainer">
                <a href="/login">
                  <Button className="mainbtns">Log in</Button>
                  <Button className="mainbtns">Sign up</Button>
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default landingpage;
