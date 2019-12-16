import React from "react";
import {LogoSvg, HeaderLogoSvg} from "./LogoStyle";

export const HeaderLogo = props => (
    <HeaderLogoSvg
        width="56px"
        height="56px"
        viewBox="0 0 56 56"
        id="logo-svg"
        {...props}
    >
        <g id="header-logo-layer">
            <g
                aria-label="v"
                id="big-v-header"
            >
                <path
                    d="m 168.93892,40.52612 h 38.20127 l -69.946,186.16397 h -27.6197 L 39.628487,40.52612 h 38.201278 l 45.554575,132.8974 z"
                    id="path5128"
                />
            </g>
            <g
                aria-label="v"
                id="small-v-header"
            >
                <path
                    d="m 145.07593,40.50926 h 17.98933 L 130.12704,128.1756 H 117.12067 L 84.182451,40.50926 h 17.989339 l 21.45207,62.58262 z"
                    id="path5133"
                />
            </g>
        </g>
    </HeaderLogoSvg>
);

const Logo = props => (
    <LogoSvg
        width="256px"
        height="256px"
        viewBox="0 0 256 256"
        id="logo-svg"
        {...props}
    >
        <g id="layer1">
            <g
                aria-label="v"
                id="big-v"
            >
                <path
                    d="m 168.93892,40.52612 h 38.20127 l -69.946,186.16397 h -27.6197 L 39.628487,40.52612 h 38.201278 l 45.554575,132.8974 z"
                    id="path5128"
                />
            </g>
            <g
                aria-label="v"
                id="small-v"
            >
                <path
                    d="m 145.07593,40.50926 h 17.98933 L 130.12704,128.1756 H 117.12067 L 84.182451,40.50926 h 17.989339 l 21.45207,62.58262 z"
                    id="path5133"
                />
            </g>
        </g>
    </LogoSvg>
);

export default Logo;