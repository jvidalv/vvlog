import React from 'react';
import { HomeLoaderDiv, LoadersWrapperDiv } from './LoadersStyle';
import { HeroHome } from './HeroSection';
import { useLocation } from 'react-router';

/**
 * @returns {boolean}
 */
const useIsHome = () => {
  const location = useLocation();
  return location.pathname === '/';
};

/**
 * @returns {*}
 * @constructor
 * todo its better to split in different components and check for home path in other place
 */
export function MainLoader(props) {
  return (
    <LoadersWrapperDiv>
      {useIsHome() ? (
        <HomeLoaderDiv>
          <HeroHome />
        </HomeLoaderDiv>
      ) : (
        <>
          {/*<OtherPagesLoaderDiv>*/}
          {/*    <div className="d-flex justify-content-center align-items-center flex-column">*/}
          {/*        <LettersDiv>vvlog</LettersDiv>*/}
          {/*        <Logo/>*/}
          {/*    </div>*/}
          {/*</OtherPagesLoaderDiv>*/}
        </>
      )}
    </LoadersWrapperDiv>
  );
}
