import React from "react";
import { withRouter } from "react-router-dom";
import { A, P, H3, H4, H5, SidebarElement } from "../styles/GenericStyles";

const Element = props => {
  const { icon } = props;
  return (
    <SidebarElement className="p-4 text-center with-icon" icon={icon}>
      {props.content}
    </SidebarElement>
  );
};

const AboutMe = props => {
  return (
    <>
      <A
        href="https://github.com/jvidalv"
        italic
        fontPlex
        fontSize="1.6rem"
        target="_blank"
      >
        On Github
        <br /> @jvidalv
      </A>
    </>
  );
};

function MoreOfMe(props) {
  const Project = props => {
    return (
      <A
        className="my-3"
        bottomBar
        fontSize="1.3rem"
        href={props.url}
        target="_blank"
      >
        {props.name}
      </A>
    );
  };

  return (
    <>
      <H4 fontPlex fontSize="1.6rem">
        more of me
      </H4>
      <Project name="Fem Poble" url="https://fempoble.app" />
      <Project name="ReactNews" url="#" />
      <Project name="ColorShop" url="#" />
      <Project name="Emojindex" url="#" />
    </>
  );
}

const CategorySidebar = () => {
  return (
    <>
      <div className="mt-3 d-md-none"></div>
      <Element content={<MoreOfMe />} icon="📚" />
      <Element content={<MoreOfMe />} icon="📚" />
      <Element content={<AboutMe />} icon="🚀" />
    </>
  );
};

const HomeSidebar = () => {
  return (
    <>
      <div className="mt-3 d-md-none"></div>
      <Element content={<MoreOfMe />} icon="📚" />
      <Element content={<AboutMe />} icon="🚀" />
    </>
  );
};

function Sidebar(props) {
  const { pathname } = props.location;

  switch (pathname) {
    case "/":
      return <HomeSidebar />;
    case "/category":
      return <CategorySidebar />;
    default:
      return <HomeSidebar />;
  }
}

export default withRouter(Sidebar);
