import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {H2, Me, P} from "../styles/GenericStyles";
import me from "../assets/images/me-finland.jpg";
import {HelmetAbout} from "../constants/Helmets";
import {MyNetworks} from "../components/MyContents";
import useT from "../helpers/Translator";

function About() {
    return (
        <>
            <HelmetAbout/>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={useT('about')}
                            subtitle={useT('an_introduction_to_me_and_vvlogs_philosophy') + " ⚖"}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <P big borderLeft="primary">
                            {useT('about_p_1')}
                        </P>
                        <P big borderLeft="secondary">
                            {useT('about_p_2')}
                        </P>
                        <P big themecolor="primary" className="text-right">
                            {useT('about_p_3')}
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
                            <img src={me} alt="its me!"/>
                        </Me>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <P big>
                            {useT('about_p_4', ['👀'])}
                        </P>
                        <P big>
                            {useT('about_p_5', ['✨'])}
                        </P>
                        <P big>
                            {useT('about_p_6', ['😉'])}
                        </P>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <MyNetworks/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;
