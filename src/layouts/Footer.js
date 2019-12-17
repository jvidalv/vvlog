import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {P} from "../styles/GenericStyles";
import {useScrollPosition} from "../hooks/useScrollPosition";
import {FloatingButton} from "./FooterStyle.js";
import {MyNetworks} from "../components/MyContents";
import {smoothMove} from "../helpers/Generics";

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
            <footer>
                <Container className="text-center py-5">
                    <MyNetworks className="mb-4"/>
                    <P className="on-background mb-0">
                        Code snippets licensed under MIT, unless otherwise noted. Content &
                        Graphics © 2019 vvlog Josep Vidal
                    </P>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
