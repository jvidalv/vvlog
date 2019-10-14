import React from "react";
import styled from "styled-components";

export const Main = styled.div`
  background-color: ${props => {
    switch (props.theme.style) {
      case "dark":
        return "black";
      case "white":
        return "white";
    }
  }};
`;

export default Main;
