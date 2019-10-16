import React from "react";
import { Container } from "react-bootstrap";
import { PoB } from "../styles/GenericStyles";

function Footer() {
  return (
    <footer>
      <Container className="text-center py-5">
        <PoB className="mb-0">
          Code snippets licensed under MIT, unless otherwise noted. Content &
          Graphics © 2019 VBLOGV Josep Vidal
        </PoB>
      </Container>
    </footer>
  );
}

export default Footer;
