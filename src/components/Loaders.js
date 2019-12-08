import React from "react";
import {MainLoaderDiv} from "./LoadersStyle";
import {useGlobals} from "../contexts/Global";

export function MainLoader(props) {
    const [{mainLoading}] = useGlobals();
    console.log(mainLoading)
    return (
        <MainLoaderDiv>
            hola
        </MainLoaderDiv>
    )
}