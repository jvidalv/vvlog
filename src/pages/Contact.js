import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {HeroSimple} from "../components/HeroSection";
import {ButtonStyled, ContentDiv, FormStyled, P, S} from "../styles/GenericStyles";
import {isEmail} from "../helpers/Validations";
import vfetch from "../helpers/Vfetch";
import api_calls from "../constants/Api";
import vStorage from "../helpers/VStorage";
import STORAGE_KEYS from "../constants/Storers";
import useT from "../helpers/Translator";

/**
 * @returns {*}
 * @constructor
 */
function Contact() {
    // 0 => Non send, 1 => Wrong email, 2 => Empty message, 3 => server error, 4 => ok
    const [submited, setSubmited] = React.useState(0);
    const contactForm = React.useRef();
    /**
     * Captures de button click and submits the form after validanting the inputs
     */
    const submit = () => {
        const data = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            message: document.getElementById('contact-message').value,
        };
        if (isEmail(data.email) && data.message) {
            vfetch(api_calls.data.contact_form, {...data})
                .then(() => vStorage.setItem(STORAGE_KEYS.CONTACT_FORM_SUBMITED, true));
        } else {
            setSubmited(1);
            alert('something is wrong')
        }
    };

    return (
        <>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={useT('contact')}
                            subtitle={useT('if_you_are_not_a_ill_check_you_back', ['🤖', '❤'])}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <ContentDiv>
                            <div className="p-4">
                                <P big>
                                    Do you have any <S>suggestions</S>? Any topic you need help
                                    with, or code you'd like to see together. 🙌
                                </P>
                                <P big>Contact me, I will try to answer as soon as possible.</P>
                            </div>
                        </ContentDiv>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <ContentDiv>
                            <div className="p-4">
                                <FormStyled ref={contactForm}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            id="contact-name"
                                            type="text"
                                            placeholder=""
                                            autoComplete="off"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control id="contact-email" type="email" placeholder="" required/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control id="contact-message" as="textarea" rows="3" required/>
                                    </Form.Group>
                                    <ReCAPTCHA
                                        sitekey="6Lci-L4UAAAAAP_EjffvxvugrVRgraSA_5LHBFXD"
                                        size="invisible"
                                        onChange={() => false}
                                    />
                                </FormStyled>
                                <div className="text-center mt-3">
                                    <ButtonStyled
                                        background="primary2"
                                        color="onPrimary2"
                                        type="submit"
                                        onClick={() => submit()}
                                    >
                                        Send 📮
                                    </ButtonStyled>
                                </div>
                            </div>
                        </ContentDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;