import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {HeroSimple} from "../components/HeroSection";
import {ButtonStyled, ContentDiv, FormStyled, Label, P, S} from "../styles/GenericStyles";
import {isEmail} from "../helpers/Validations";
import vfetch from "../helpers/Vfetch";
import api_calls from "../constants/Api";
import vStorage from "../helpers/VStorage";
import STORAGE_KEYS from "../constants/Storers";
import useT from "../helpers/Translator";
import {HelmetContact} from "../constants/Helmets";
import {MyNetworks} from "../components/MyContents";

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
            setSubmited(4);
            vfetch(api_calls.data.contact_form, {...data})
                .then(() => vStorage.setItem(STORAGE_KEYS.CONTACT_FORM_SUBMITED, true));
        } else {
            setSubmited(isEmail(data.email) ? 2 : 1);
        }
    };

    return (
        <>
            <HelmetContact/>
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
                <Row className="justify-content-md-center mb-4">
                    <Col xs md={10} lg={8}>
                        <ContentDiv>
                            <div className="p-4">
                                <P big>
                                    {useT('do_you_have_any_suggestions_any_topic_you_need_help_with_or_code_youd_like_to_see_together')}. 🙌
                                </P>
                                <P big>{useT('contact_me_ill_try_to_answer_as_soon_as_possible')}.</P>
                            </div>
                        </ContentDiv>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs md={10} lg={8}>
                        <ContentDiv>
                            <div className="p-4">
                                <FormStyled ref={contactForm}>
                                    <Form.Group>
                                        <div>
                                            <Label themecolor="onSurface" fontSize="1.3rem">{useT('your_name')}</Label>
                                        </div>
                                        <Form.Control
                                            id="contact-name"
                                            type="text"
                                            placeholder=""
                                            autoComplete="off"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <div>
                                            <Label themecolor="onSurface" fontSize="1.3rem">{useT('your_email')}</Label>
                                            <Label className={"ml-2 " + (submited !== 1 ? "d-none" : "")}
                                                   themecolor="error"
                                                   fontSize="1rem">{useT('email_is_invalid')}</Label>
                                        </div>
                                        <Form.Control id="contact-email" type="email" placeholder="" required/>
                                    </Form.Group>
                                    <Form.Group>
                                        <div>
                                            <Label themecolor="onSurface" fontSize="1.3rem">{useT('message')}</Label>
                                            <Label className={"ml-2 " + (submited !== 2 ? "d-none" : "")}
                                                   themecolor="error"
                                                   fontSize="1rem">{useT('message_cant_be_empty')}</Label>
                                        </div>
                                        <Form.Control id="contact-message" as="textarea" rows="3" required/>
                                    </Form.Group>
                                    <ReCAPTCHA
                                        sitekey="6Lci-L4UAAAAAP_EjffvxvugrVRgraSA_5LHBFXD"
                                        size="invisible"
                                        onChange={() => false}
                                    />
                                </FormStyled>
                                <div className="text-center mt-3">
                                    <Label className={"my-2 " + (submited !== 4 ? "d-none" : "")} themecolor="primary"
                                           fontSize="1.3rem">{useT('thanks_for_contacting_us', ['😛'])}</Label>
                                    <ButtonStyled
                                        className={(submited === 4 ? "d-none" : "")}
                                        disabled={submited === 4}
                                        themebackground="primary2"
                                        themecolor="onPrimary2"
                                        type="submit"
                                        onClick={() => submit()}
                                    >
                                        {useT('send', ['📮'])}
                                    </ButtonStyled>
                                </div>
                            </div>
                        </ContentDiv>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <MyNetworks/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;