import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {H2, Me, P, S} from "../styles/GenericStyles";
import me from "../assets/images/me-finland.jpg";
import {HelmetAbout} from "../constants/Helmets";

function About() {
    return (
        <>
            <HelmetAbout />
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title="About"
                            subtitle="An introduction to me and vvlog's philosophy ⚖"
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <P big borderLeft="primary">
                            vvlog is born out of the passion for the creation of things from
                            the absolute void. What greater art is there than the appearance
                            of things where there was nothing before?
                        </P>
                        <P big borderLeft="secondary">
                            And in the meantime, I will try to explain them as best I can, so
                            that I can learn from them. And someone who reads me, too. ♥
                        </P>
                        <P big color="primary" className="text-right">
                            I really hope you like it.
                        </P>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-3">
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <H2 className="separator">Josep Vidal Vidal</H2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <Me>
                            <img src={me}/>
                        </Me>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <P big>
                            As you might have guessed, <S>vvlog's name</S> comes from my
                            repeated surnames 👀.
                        </P>
                        <P big>
                            I'm a <S>fullstack programmer</S> who loves web development, I
                            really like <S>CREATING ✨</S> literally, inventing things that go
                            through my head. Design and UX are things I'm passionate about.
                        </P>
                        <P big>
                            You can contact me in one of my social networks below or by mail
                            😉.
                        </P>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;
