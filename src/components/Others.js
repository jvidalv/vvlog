import React from "react";
import {H3, H5, P} from "../styles/GenericStyles";
import useT from "../helpers/Translator";
import {CookiesDiv} from "./OthersStyle";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/**
 * Component used on places where you can search for items
 * Used if no content is found
 * @param props
 * @returns {*}
 * @constructor
 */
export function EmptyList(props) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-height-250">
            <H3>
                {useT('seems_like_this_is_empty')}
            </H3>
            <P>
                {useT('maybe_try_another_words', ['🤔'])}
            </P>
        </div>
    );
}

/**
 * Cookies
 * @returns {*}
 * @constructor
 */
export function Cookies() {
    return (
        <CookiesDiv className="position-fixed fixed-bottom d-flex flex-column align-items-center">
            <Container>
                <Row>
                    <Col sm={10} lg={5}>
                        <H5 className="text-center" fontPlex>This website uses cookies</H5>
                        <P>
                            We use cookies to personalise content and ads, to provide social media
                            features and to analyse our traffic.
                        </P>
                        <div className="d-flex mb-3">
                            <Button className="w-25 mr-1">
                                Cancel
                            </Button>
                            <Button className="w-75 ">
                                I agree
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </CookiesDiv>
    )
}