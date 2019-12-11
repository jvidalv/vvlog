import React from "react";
import {MainLoaderDiv} from "./LoadersStyle";
import {useGlobals} from "../contexts/Global";
import {HeroHome} from "./HeroSection";
import {useLocation} from "react-router";

export function MainLoader(props) {
    const location = useLocation();

    return (
        <MainLoaderDiv>
            <HeroHome />
        </MainLoaderDiv>
    )
}