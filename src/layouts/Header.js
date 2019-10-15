import React from "react";
import { useGlobals } from "../contexts/Globals";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import { NavStyled } from "./HeaderStyle.js";

export default function Header() {
  const [{ theme }, dispatch] = useGlobals();

  return (
    <NavStyled expand="lg">
      <Navbar.Brand href="#home">VBLOGV</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-2 mr-auto">
          <Nav.Link className="text-white px-4" href="#home">
            Explore
          </Nav.Link>
          <Nav.Link className="text-white px-4" href="#link">
            React
          </Nav.Link>
          <Nav.Link className="text-white px-4" href="#link">
            Contact
          </Nav.Link>
          <Nav.Link className="text-white px-4" href="#link">
            About
          </Nav.Link>
        </Nav>
        <Nav className="mr-4">
          <Nav.Link
            className="text-white"
            href="#home"
            onClick={() =>
              dispatch({
                type: "changeTheme",
                newTheme: "dark"
              })
            }
          >
            Dark
          </Nav.Link>
          <Nav.Link
            className="text-white"
            href="#home"
            onClick={() =>
              dispatch({
                type: "changeTheme",
                newTheme: "light"
              })
            }
          >
            Light
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="🔎" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </NavStyled>
  );
}
