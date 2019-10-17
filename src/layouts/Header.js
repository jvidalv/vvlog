import React from "react";
import { useGlobals } from "../contexts/Globals";
import { Link } from "react-router-dom";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import { NavStyled, Logo, LinkStyled } from "./HeaderStyle.js";
import { withRouter } from "react-router-dom";

import logo from "../assets/images/logo-vblogv-small.png";

export function Header(props) {
  const { pathname } = props.location;
  const [{ theme }, dispatch] = useGlobals();

  return (
    <NavStyled expand="lg">
      {pathname !== "/" ? (
        <LinkStyled to="/" className="mr-0">
          <Logo src={logo} />
        </LinkStyled>
      ) : null}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-2 mr-auto">
          <LinkStyled className="px-4" to="/">
            Explore
          </LinkStyled>
          <LinkStyled className="px-4" to="/react">
            React
          </LinkStyled>
          <LinkStyled className="px-4" to="#link">
            Contact
          </LinkStyled>
          <LinkStyled className="px-4" to="#link">
            About
          </LinkStyled>
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
