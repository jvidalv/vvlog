import {THEMES} from "../constants/Themes";

/**
 * Fonts defaults
 * @param props
 * @returns {string}
 */
export const fontsDefaults = props => `
    ${props.color ? `color : ${props.color}` : ''};
    ${props.fontSize ? `font-size : ${props.fontSize}` : ''};
    ${props.fontWeight ? `font-weight : ${props.fontWeight}` : ''};
    font-style : ${props.italic ? 'italic' : 'unset'};
    opacity : ${props.muted ? 0.7 : 1};
    font-family : ${props.fontRecursive ? 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, "Open Sans", FreeSans, sans-serif;' : 'inherit'}
`;
/**
 * Custom border left
 * @param props
 * @returns {string}
 */
export const borderLeft = props => `
    margin-bottom: 1em;
    margin-top: 1.2em;
    border-left: 4px solid ${THEMES[props.theme.style][props.borderLeft]};
    padding-left: .8em;
    text-align: justify;
`;

