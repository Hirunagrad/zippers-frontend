import React from "react";
import "./footer.css";
import { Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footercls">
      <>
        <Container className="conts">
          <Row>
            <p className="text-center">Copyright &copy; Hirunagrad </p>
          </Row>
        </Container>
      </>
    </div>
  );
}
