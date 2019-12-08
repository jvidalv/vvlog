import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {useGlobals} from "../contexts/Global";

function Error(props) {
    const [{errors, language}] = useGlobals();
    return (
        <>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title="Something went wrong!"
                            subtitle={errors}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Error;
