import styled from 'styled-components'

export const Content = styled.div`
  & p,
  span:not(.token),
  ul,
  ol {
    color: ${({ theme }) => theme.onBackground};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif !important;
    font-size: 20px !important;
    font-weight: 300 !important;
  }
  & a,
  a > span,
  strong {
    color: ${({ theme }) => theme.error};
  }
  & a {
    text-decoration: underline;
  }
  & h2,
  h2 > span,
  h2 > a {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem !important;
    @media only screen and (max-width: 40em) {
      font-size: 1.8em !important;
    }
  }
  & h3,
  h3 > span,
  h3 > a {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5rem !important;
    @media only screen and (max-width: 40em) {
      font-size: 1.4em !important;
    }
  }
  & h3,
  h2 {
    font-weight: 300;
    display: flex;
    margin: 30px 0;
    @media only screen and (max-width: 40em) {
      //display: block !important;
    }
  }
  & blockquote {
    margin: 30px 0;
  }
  & blockquote > p {
    border-left: 4px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.infoBox};
    font-size: 1.2rem !important;
    position: relative;
    clear: both;
    padding: 0.8em 1em;
  }
  & img {
    background: ${({ theme }) => theme.surface.level3};
  }
  & pre {
    background: #181c22 !important;
    box-shadow: 5px 5px 10px 2px #00000029;
    margin: 1.8em 0 !important;
    @media (max-width: 10000px) and (min-width: 1550px) {
      margin-left: -3rem !important;
    }
  }
  & > p:first-child {
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 0.8em;
  }
  & h2::after,
  h3::after {
    content: ' ';
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary + '2e'}
    );
    height: 3px;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: auto;
    margin: 0.75em 2px 0 3px;
    flex-grow: 1;
    border-radius: 2px;
  }
  & h3::after {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.primary + '2e'}
    );
  }
  & ul,
  ol {
    list-style: none; /* Remove default bullets */
  }
  & ul li::before,
  ol li::before {
    content: '\\2022'; /* Add content: \\2022 is the CSS Code/unicode for a bullet */
    color: ${({ theme }) => theme.onBackground};
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`

export const TagContainer = styled.div`
  > a {
    padding: 5px 10px;
    border-radius: 3px;
    margin-right: 5px;
    box-shadow: 0 0 1px 1px #c7c7c7;
    color: ${({ theme }) => theme.onSurface};
  }
  & > a:hover {
    background: #1d2124;
    color: white;
  }
`

export const ReadingBarStyled = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 6px;
  z-index: 10000;
  transition: 0.25s;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary + '50'} ${({ scroll }) => scroll + '%'},
    transparent 0
  );
`

export const ClapSpan = styled.span`
  filter: ${({ clapped }) => (clapped ? `unset` : `grayscale(1)`)};
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #c7c7c7;
  text-align: center;
  line-height: 58px;
  width: 58px;
  height: 58px;
  font-size: 1.5rem;
  margin-left: 16px;
  cursor: pointer;
  transition: 0.25s !important;
  user-select: none;
  &:hover {
    filter: unset;
    box-shadow: 0 0 7px 4px #c7c7c7;
    transition: 0.25s !important;
  }
`
