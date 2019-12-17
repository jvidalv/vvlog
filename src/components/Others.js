import React from "react";
import {H3, P} from "../styles/GenericStyles";
import useT from "../helpers/Translator";

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
