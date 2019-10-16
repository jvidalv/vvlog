import React from "react";
import { useGlobals } from "../contexts/Globals";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import { NavStyled, Logo } from "./HeaderStyle.js";
import { withRouter } from "react-router-dom";

import logo from "../assets/images/logo-vblogv-small.png";

export function Header(props) {
  const { pathname } = props.location;
  const [{ theme }, dispatch] = useGlobals();

  return (
    <NavStyled expand="lg">
      {pathname !== "/" ? (
        <Navbar.Brand href="/" className="mr-0">
          <Logo src={logo} />
        </Navbar.Brand>
      ) : null}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-2 mr-auto">
          <Nav.Link className="text-white px-4" href="/">
            Explore
          </Nav.Link>
          <Nav.Link className="text-white px-4" href="/react">
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

export default withRouter(Header);
