import React from "react";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";

import { ContainerHeader, LogoHeader } from "./HeaderStyle";
import logo from "../assets/images/logo-vidalv.png";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">VBLOGV</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-2 mr-auto">
          <Nav.Link className="px-4" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="px-4" href="#link">
            Link
          </Nav.Link>
          <Nav.Link className="px-4" href="#link">
            Link
          </Nav.Link>
          <Nav.Link className="px-4" href="#link">
            Link
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="🔎" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
