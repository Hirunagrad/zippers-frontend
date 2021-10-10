import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footercls">
      <MDBFooter className="footercls  text-center text-lg-left">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://hirunagrad.com/">
            <span>Hirunagrad</span>
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
