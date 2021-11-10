import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ tittle, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page" style={{ marginRight: "40px" }}>
            {tittle && (
              <>
                <h1 className="heading">{tittle}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
