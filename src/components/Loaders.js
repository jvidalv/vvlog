import React, {useEffect} from "react";
import {HomeLoaderDiv, LettersDiv, LoadersWrapperDiv, OtherPagesLoaderDiv} from "./LoadersStyle";
import {HeroHome} from "./HeroSection";
import {useLocation} from "react-router";
import Logo from "../assets/svgs/Logo";
import {useGlobals} from "../contexts/Global";

/**
 * @returns {boolean}
 */
const useIsHome = () => {
    const location = useLocation();
    return location.pathname === "/";
};

/**
 * @returns {*}
 * @constructor
 * todo its better to split in diferent components and check for home path in other place
 */
export function MainLoader(props) {

    return (
        <LoadersWrapperDiv showLoaders={props.showLoaders}>
            {
                useIsHome() ?
                    <HomeLoaderDiv>
                        <HeroHome/>
                    </HomeLoaderDiv>
                    :
                    <>
                    {/*<OtherPagesLoaderDiv>*/}
                    {/*    <div className="d-flex justify-content-center align-items-center flex-column">*/}
                    {/*        <LettersDiv>vvlog</LettersDiv>*/}
                    {/*        <Logo/>*/}
                    {/*    </div>*/}
                    {/*</OtherPagesLoaderDiv>*/}
                    </>
            }
        </LoadersWrapperDiv>
    )
}