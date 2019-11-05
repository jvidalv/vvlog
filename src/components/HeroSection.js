import React from "react";
import {HeroH1, HeroH4, HeroImage, HeroP, HeroSectionStyled} from "./HeroSectionStyle";
import {Link} from "react-router-dom";
import initials from "../assets/images/logo-initials.png";

export function HeroHome() {
    return (
        <HeroSectionStyled>
            <HeroImage src={initials}/>
            <HeroH1 className="my-3 px-2 extra">
                Fullstack development on point
            </HeroH1>
            <HeroP className="mb-3 px-2">
                React, JavaScript, PHP
                <br/>
                Yii2, CSS and a glimpse into my life
            </HeroP>
        </HeroSectionStyled>
    );
}

export function HeroSimple(props) {
    const {title, subtitle, overtitle, urlOvertitle} = props;
    return (
        <>
            <HeroH4 className="my-3 mb-4">
                <Link to={urlOvertitle}>{overtitle}</Link>
            </HeroH4>
            <HeroH1 className="my-3">{title}</HeroH1>
            <HeroH4 className="my-3">{subtitle}</HeroH4>
        </>
    );
}
