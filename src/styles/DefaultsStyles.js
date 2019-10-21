import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Themes";

/**
 * -------
 * In this file we define group of rules that are common on many styled components classes
 * -------
 */

export const fontsDefaults = props => {
  let stylesString = "";
  stylesString +=
    "color" in props
      ? "color : " + THEMES[props.theme.style][props.color] + ";"
      : "";
  stylesString += "italic" in props ? "font-style : italic;" : "";
  stylesString += "fontPlex" in props ? "font-family : 'IBM Plex Mono';" : "";
  stylesString +=
    "fontSize" in props ? "font-size : " + props.fontSize + ";" : "";

  return stylesString;
};

export const afterBottomBar = props => {
  let stylesString = "";
  if ("bottomBar" in props) {
    stylesString += `
    width: 2.5rem;
    height: 2px;
    background: ${THEMES[props.theme.style].secondary};
    content: " ";
    display: block;
    margin: 0px auto;
    position: relative;
    top: 1rem;
    `;
  }
  return stylesString;
};

export const borderLeft = props => {
  let stylesString = "";
  if ("borderLeft" in props) {
    stylesString += `margin-bottom: 1em;
    margin-top: 1.9em;
    border-left: 4px solid ${THEMES[props.theme.style][props.borderLeft]};
    padding-left: .8em;
    text-align: justify;`;
  }
  return stylesString;
};
