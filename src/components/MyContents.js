import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
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
  FaLinkedinIn,
  FaFacebook,
  FaReddit,
  FaWhatsapp,
  FaTwitter
} from "react-icons/fa";
import { IconA, ShareA, ColStyled } from "./MyContentsStyle";
import { P } from "../styles/GenericStyles";

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
    <Container className="py-1 mt-5">
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

const ShareOption = props => {
  const { url, title, icon, iconColor, className } = props;
  return (
    <ShareA
      href={url}
      className={className}
      title={title}
      iconColor={iconColor}
      target="_blank"
    >
      {icon}
    </ShareA>
  );
};

export function Sharer(props) {
  const { title } = props;
  let location = window.location.href;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <ColStyled className="text-center" xs md lg={10}>
          <ShareOption
            url={"https://www.facebook.com/sharer/sharer.php?u=" + location}
            icon={<FaFacebook />}
            title="Share on Facebook! 💖"
            className="left-bar"
          />
          <ShareOption
            url={
              "https://www.reddit.com/submit?url=" +
              location +
              "&title=" +
              title
            }
            icon={<FaReddit />}
            title="Share on Reddit! 💖"
          />
          <ShareOption
            url={"https://web.whatsapp.com/send?text=" + location}
            icon={<FaWhatsapp />}
            title="Share on Whatsapp! 💖"
          />
          <ShareOption
            url={
              "https://twitter.com/intent/tweet?url=" +
              location +
              "&text=" +
              title +
              "&original_referer=" +
              location
            }
            icon={<FaTwitter />}
            title="Share on Twitter! 💖"
          />
          <ShareOption
            url={
              "https://www.linkedin.com/sharing/share-offsite/?url=" + location
            }
            icon={<FaLinkedinIn />}
            className="right-bar"
            title="Share on LinkedIn! 💖"
          />
        </ColStyled>
      </Row>
    </Container>
  );
}
