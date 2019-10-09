import React from "react";
import {
  Navbar,
  Container,
  Image,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button
} from "react-bootstrap";
import "./HeaderStyle.js";
import logo from "../assets/images/logo-vidalv.png";

export default function Body(props) {
  return <Container>{props.children}</Container>;
}
