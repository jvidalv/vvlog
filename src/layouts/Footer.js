import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {useScrollPosition} from "../hooks/useScrollPosition";
import {FloatingButton} from "./FooterStyle.js";
import {smoothMove} from "../helpers/Generics";
import {Cookies} from "../components/Others";
import {FooterStyled} from "./FooterStyle";
import {A, P} from "../styles/GenericStyles";
import {Link} from "react-router-dom";
import useT from "../helpers/Translator";

/**
 * Shows the floating button  that brings you to the top
 * @param {*} props
 */
const ButtonToTop = ({className}) => {
    return (
        <FloatingButton
            onClick={() => smoothMove(true)}
            className={className}
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
    // Moves back on top on click
    useScrollPosition(
        ({prevPos, currPos}) => hasToShow(prevPos, currPos),
        [],
        null,
        false,
        1500
    );

    return (
        <>
            <ButtonToTop className={showToTop ? "active" : null}/>
            <Cookies/>
            <FooterStyled className="mt-3 pt-5">
                <Container className="d-md-flex mt-5 py-5">
                    <div className="left-side w-50 d-flex flex-column justify-content-center">
                        <span className="hand mb-1">👋</span>
                        <P fontSize="1rem">
                            {useT('vvlog_is_created_written_and_maintained_by')} <br/>
                            <A href="http://vidal.fun">Josep Vidal </A> {useT('and_a_team_of_contributors_on_github')}.
                        </P>
                    </div>
                    <div className="right-side d-flex flex-column w-50 text-right">
                        <Link to="/" className="ba">{useT('homepage')}</Link>
                        <Link to="/about" className="ba">{useT('about')}</Link>
                        <Link to="/contact" className="ba">{useT('contact')}</Link>
                        <a href="https://github.com/jvidalv/vvlog" className="fa">Github</a>
                    </div>
                </Container>
            </FooterStyled>
        </>
    );
}

export default Footer;
