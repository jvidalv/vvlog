import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { FloatingButton } from './FooterStyle.js';
import { smoothMove } from '../helpers/Generics';
import { Cookies } from '../components/Others';
import { FooterStyled } from './FooterStyle';
import { A, P } from '../styles/GenericStyles';
import { Link } from 'react-router-dom';
import useT from '../helpers/Translator';
import { useGlobals } from '../contexts/Global';

/**
 * Shows the floating button  that brings you to the top
 * @param {*} props
 */
const ButtonToTop = ({ className }) => {
  return (
    <FloatingButton onClick={() => smoothMove(true)} className={className}>
      <span>↑</span>
    </FloatingButton>
  );
};

/**
 * @returns {*}
 * @constructor
 */
function Footer() {
  const [{ language }] = useGlobals();
  const [showToTop, setShowToTop] = useState(false);
  const buttonToTopHasToShow = (prevPos, currPos) => {
    if (currPos.y < -500) {
      setShowToTop(true);
    } else if (currPos.y > -500) {
      setShowToTop(false);
    }
  };

  useScrollPosition(
    ({ prevPos, currPos }) => buttonToTopHasToShow(prevPos, currPos),
    [],
    null,
    false,
    1500
  );

  return (
    <>
      <ButtonToTop className={showToTop ? 'active' : ''} />
      <Cookies />
      <FooterStyled className="mt-3 pt-5">
        <Container className="d-md-flex mt-5 py-5">
          <div className="left-side w-50 d-flex flex-column align-items-center justify-content-md-center">
            <span className="hand mb-1">👋</span>
            <P fontSize="1rem">
              {useT('vvlog_is_created_written_and_maintained_by')} <br />
              <A href="https://josepvidal.dev/">Josep Vidal </A>{' '}
              {useT('and_a_team_of_contributors_on_github')}.
            </P>
          </div>
          <div className="right-side d-flex flex-column w-50 text-center text-md-right">
            <Link to={`/${language}`} className="ba">
              {useT('homepage')}
            </Link>
            <Link to={`/${language}/about`} className="ba">
              {useT('about')}
            </Link>
            <Link to={`/${language}/contact`} className="ba">
              {useT('contact')}
            </Link>
            <hr />
            <a href="https://github.com/jvidalv/vvlog" className="fa">
              Github
            </a>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to={`/ca`}>{useT('catalan')}</Link>
              <Link to={`/es`} className="mx-2">
                {useT('spanish')}
              </Link>
              <Link to={`/en`}>{useT('english')}</Link>
            </div>
          </div>
        </Container>
      </FooterStyled>
    </>
  );
}

export default Footer;
