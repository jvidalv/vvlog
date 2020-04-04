import styled from "styled-components";
import {arrowsLeft, backArrows, handWave} from "../styles/AnimationsStyles";

export const FloatingButton = styled.div`
  z-index: 1100;
  color: ${({theme}) => theme.secondary};
  border: 2px solid ${({theme}) => theme.secondary};
  background: ${({theme}) => theme.surface.level2};
  width: 50px;
  height: 50px;
  font-weight: 700;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
  font-size: 1.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: translateY(10rem);
  &:hover {
    opacity: 1;
  }
  &:hover > span {
    transform: translateY(-0.5rem) ;
  }
  &.active {
    opacity: 0.6;
    transform: translateY(0);
  }
  @media (max-width: 700px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 25px;
    height: 25px;
    font-size: 1rem;
  }
`;

export const FooterStyled = styled.footer`
  & .container {
    border-top: 1px dotted rgba(93,92,101,.5);
  }
  & .left-side{
        & .hand {
              animation : ${handWave} 2s cubic-bezier(0.75,0.82,0.165,1) infinite;
              transition: all .3s ease-in-out;
              display: inline-block;
              width: 5%;
              font-size: 1.3rem;
         }
       }
  & .right-side{
      & a{
        color: ${({theme}) => theme.onSurface};
        position: relative;
        font-family: Recursive, 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
      }
      & .ba:hover::before {
        animation: ${arrowsLeft} 2s infinite;
        content: "<<<";
        position: absolute;
        margin-left: -35px;
      }
      & .fa:hover::after {
        animation: ${backArrows} 2s infinite;
        content: ">>>";
        position: absolute;
        margin-left: 10px;
      }
  }
  
  @media (max-width: 700px) {
    .right-side, .left-side{
      width: 100% !important;
    }
    .left-side{
      margin-bottom: 25px;
    }
  }
`;
