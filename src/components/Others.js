import React from "react";
import {ButtonStyled, H3, H5, P} from "../styles/GenericStyles";
import useT from "../helpers/Translator";
import {CookiesDiv} from "./OthersStyle";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import STORAGE_KEYS from "../constants/Storers";
import api_calls from "../constants/Api";
import vfetch from "../helpers/Vfetch";
import vStorage from "../helpers/VStorage";

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
 * Cookie notification
 * @returns {*}
 * @constructor
 * @return {null}
 */
export function Cookies() {
    const [show, setShow] = React.useState(false);
    const cookiesRef = React.createRef();

    /**
     * Hide component, store data in DB and remove it from dom
     */
    const accept = () => {
        cookiesRef.current.classList.add('hideToBottom');
        vfetch(api_calls.data.user_cookies)
            .then(() => vStorage.setItem(STORAGE_KEYS.BASIC_COOKIES, true));
        setTimeout(() => setShow(false), 1000);
    };

    React.useEffect(() => {
        setTimeout(() => setShow(!vStorage.getItem(STORAGE_KEYS.BASIC_COOKIES)), 5000);
    }, []);

    return show ? (
        <CookiesDiv ref={cookiesRef} className="position-fixed fixed-bottom d-flex flex-column align-items-center">
            <Container>
                <Row>
                    <Col sm={10} lg={5}>
                        <H5 className="text-center" fontPlex>This website uses cookies</H5>
                        <P>
                            We use cookies to personalise content and ads, to provide social media
                            features and to analyse our traffic.
                        </P>
                        <ButtonStyled onClick={() => accept()} className="w-100 mb-3">
                            I agree
                        </ButtonStyled>
                    </Col>
                </Row>
            </Container>
        </CookiesDiv>
    ) : null
}