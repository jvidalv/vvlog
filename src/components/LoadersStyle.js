import styled, { keyframes } from 'styled-components';

export const fadeToTop = keyframes`
   0% {
        height: 100%;
        opacity: 1;
   }
   100% {
        height: 0;
        display: none; 
        z-index:-1;
   }
`;

export const fade = keyframes`
   0% {
        opacity: 1;
   }
   100% {
        opacity: 0
   }
`;

export const LoadersWrapperDiv = styled.div`
  opacity: ${({ showLoaders }) => (showLoaders ? 1 : 0)};
`;

export const HomeLoaderDiv = styled.div`
  padding-top: 56px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.header.left},
    ${({ theme }) => theme.header.right}
  );
  z-index: 1400;
  animation: ${fadeToTop} 2s ease-in-out forwards;
  transition: 0.25s;
`;

export const OtherPagesLoaderDiv = styled.div`
  padding-top: 56px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 1400;
  animation: ${fadeToTop} 1.5s ease-in-out forwards;
  animation-delay: 2s;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.header.left},
    ${({ theme }) => theme.header.right}
  );
  transition: 0.25s;
  & > div {
    margin-top: 150px;
  }
  & > * {
    animation: ${fade} 0.5s ease-in forwards;
    animation-delay: 2s;
    overflow-y: hidden;
  }
`;

export const LettersDiv = styled.div`
  color: white;
  font-size: 2em;
  font-family: Recursive, 'Segoe UI', 'Helvetica Neue', Helvetica, Roboto,
    'Open Sans', FreeSans, sans-serif;
`;
