import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBeer,
  FaInstagram,
  FaGithub,
  FaGoogle,
  FaEnvelope,
  FaEnvelopeOpen,
  FaStackOverflow,
  FaPersonBooth,
  FaGlobe,
  FaLinkedinIn
} from "react-icons/fa";
import { IconA } from "./MyContentsStyle";

const Network = props => {
  const { url, title, icon, iconColor } = props;
  return (
    <IconA href={url} title={title} target="_blank">
      {icon}
    </IconA>
  );
};

/**
 * Returns an inline element with all my social networks
 * Ready to use everywhere as it contains until the container component
 */
export function MyNetworks() {
  return (
    <Container className="py-4 mt-3">
      <Row>
        <Col className="text-center">
          <Network
            url="mailto:josepvidalvidal@gmail.com"
            title="Send me an email"
            icon={<FaEnvelopeOpen />}
          />
          <Network
            url="https://github.com/jvidalv"
            title="My GitHub!"
            icon={<FaGithub />}
          />
          <Network
            url="https://www.instagram.com/jvidalv/"
            title="Its my Insta"
            icon={<FaInstagram />}
          />
          <Network
            url="https://stackoverflow.com/users/9724551/josep-vidal?tab=profile"
            title="I also participate on SO!"
            icon={<FaStackOverflow />}
          />
          <Network
            url="https://www.linkedin.com/in/josepvidalvidal/"
            title="My profesional profesion pro profile"
            icon={<FaLinkedinIn />}
          />
          <Network
            url="http://www.vidal.fun"
            title="My personal page!"
            icon={<FaGlobe />}
          />
        </Col>
      </Row>
    </Container>
  );
}
