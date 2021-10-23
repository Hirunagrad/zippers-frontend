import { Button, Container, Row } from "react-bootstrap";
import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

const landingpage = () => {
  // useEffect(() => {
  //  const userInfo = localStorage.getItem("userInfo");

  //  if (userInfo) {
  //   history.push("/mynotes");
  //  }
  //}, [history]);
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
                <Link to="/login">
                  <Button className="mainbtns">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button className="mainbtns">register</Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default landingpage;
