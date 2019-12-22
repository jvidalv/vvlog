import React from "react";
import {HeroH1, HeroH4, HeroP, HeroSectionStyled} from "./HeroSectionStyle";
import {Link} from "react-router-dom";
import Logo from "../assets/svgs/Logo";
import useT from "../helpers/Translator";
import BASE_IMAGE from "../constants/Images";
import {LoadingPlaceholder} from "../styles/GenericStyles";

/**
 * Home banner "/"
 * @returns {*}
 * @constructor
 */
export function HeroHome() {
    return (
        <HeroSectionStyled>
            <Logo/>
            <HeroH1 className="text-uppercase my-3 px-2 extra">
                {useT('fullstack_development')}
            </HeroH1>
            <HeroP className="mb-3 px-2">
                React, JavaScript, PHP
                <br/>
                Yii2, CSS and a glimpse into my life
            </HeroP>
        </HeroSectionStyled>
    );
}

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export function HeroSimple(props) {
    const {title, subtitle, overtitle, image, urlOvertitle} = props;
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {
                image ? (
                    image === 'loading' ?
                    <LoadingPlaceholder rounded width="100px" height="100px"/>
                    :
                    <img alt={title} src={BASE_IMAGE + image}/>
                ) : null
            }
            {
                overtitle ? (
                    <HeroH4 className="my-3 mb-4">
                        <Link to={urlOvertitle}>{overtitle}</Link>
                    </HeroH4>
                ) : null
            }
            <HeroH1 className="my-3">{title}</HeroH1>
            <HeroH4 className="my-3">{subtitle}</HeroH4>
        </div>
    );
}
