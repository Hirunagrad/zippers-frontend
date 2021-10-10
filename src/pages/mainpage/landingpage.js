import { MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "./landingpage.css";

const landingpage = () => {
  return (
    <div>
      <div className="main">
        <MDBContainer>
          <MDBRow>
            <div className="intro-text">
              <div>
                <h1 className="tittle">Welcome to Note Zipper</h1>
                <p className="subtittle">One safe place all your notes.</p>
              </div>
              <div className="buttonContainer">
                <a href="/login">
                  <MDBBtn className="mainbtns">Log in</MDBBtn>
                  <MDBBtn className="mainbtns">Sign up</MDBBtn>
                </a>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default landingpage;
