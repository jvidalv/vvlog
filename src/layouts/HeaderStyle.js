import React from "react";
import styled from "styled-components";

import { Container, Image } from "react-bootstrap";

export const ContainerHeader = styled(Container)`
  width: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoHeader = styled(Image)`
  position: absolute;
  margintop: 20px;
`;
