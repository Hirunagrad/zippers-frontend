import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
function Navbars() {
  const history = useHistory();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Note-zipper</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link className="lnks" to="/mynotes">
                My Notes
              </Link>

              <NavDropdown title="Hirunagrad" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  My profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    history.push("/");
                  }}
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
