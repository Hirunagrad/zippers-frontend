import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import "./header.css";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbarmain">
      <MDBNavbar expand="lg">
        <MDBContainer className="navbarmain">
          <MDBNavbarBrand href="#" className="logo">
            Navbar
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav className="justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <span>My notes</span>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="drops nav-link">
                    <span>Hirunagrad</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Profile</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Logout</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
