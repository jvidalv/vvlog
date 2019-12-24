import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {useScrollPosition} from "../hooks/useScrollPosition";
import {FloatingButton} from "./FooterStyle.js";
import {smoothMove} from "../helpers/Generics";
import {Cookies} from "../components/Others";
import {FooterStyled} from "./FooterStyle";
import {A, P} from "../styles/GenericStyles";
import {Link} from "react-router-dom";

/**
 * Shows the floating button  that brings you to the top
 * @param {*} props
 */
const ButtonToTop = props => {
    return (
        <FloatingButton
            onClick={() => smoothMove(true)}
            className={props.className}
        >
            <span>↑</span>
        </FloatingButton>
    );
};

/**
 * @returns {*}
 * @constructor
 */
function Footer() {
    const [showToTop, setShowToTop] = useState(false);

    const hasToShow = (prevPos, currPos) => {
        if (currPos.y < -500) {
            setShowToTop(true);
        } else if (currPos.y > -500) {
            setShowToTop(false);
        }
    };

    /**
     * Moves back to top on click
     */
    useScrollPosition(
        ({prevPos, currPos}) => hasToShow(prevPos, currPos),
        [],
        null,
        false,
        300
    );

    return (
        <>
            <ButtonToTop className={showToTop ? "active" : null}/>
            <Cookies/>
            <FooterStyled>
                <Container fluid className="d-flex mt-5 py-5">
                    <div className="w-50 d-flex flex-column justify-content-center">
                        <P fontSize="1.3rem" className="hand mb-1">👋</P>
                        <P fontSize="1rem">
                            vvlog is created, written, and maintained by <br />
                            <A href="http://vidal.fun">Josep Vidal</A> and a team of contributors on github.
                        </P>
                    </div>
                    <div className="w-50 text-right">
                        <Link to="/">Proba</Link>
                    </div>
                </Container>
            </FooterStyled>
        </>
    );
}

export default Footer;
