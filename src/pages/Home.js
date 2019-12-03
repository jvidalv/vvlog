import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippet, ArticleSnippetWithImage} from "../components/ArticleSnippet";

import Sidebar from "../layouts/Sidebar";
import {HeroHome} from "../components/HeroSection";
import {DiagonalContainer, H3} from "../styles/GenericStyles";
import {Subscribe} from "../components/MyContents";
import {useGlobals} from "../contexts/Global";
import {limiter} from "../helpers/Generics";

const FeaturedSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            {limiter(articles, 3).map(snippet => (
                <ArticleSnippetWithImage {...snippet[language]} categorySlug={snippet.category} className="move-up"/>
            ))}
        </>
    );
};

const AllArticlesSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            <H3 className="mb-5 text-center">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
                Check them all
            </H3>
            <Row className="px-2">
                {limiter(articles, 9).map(snippet => (
                    <Col className="d-flex px-1" md={6} lg={4}>
                        <ArticleSnippet
                            {...snippet[language]}
                            categorySlug={snippet.category}
                            className="justify-content-center move-up mb-2"
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
};

function Home() {
    return (
        <>
            <HeroHome/>
            <Container className="pt-4 pb-2">
                <Row>
                    <Col md={8} lg={9}>
                        <FeaturedSection/>
                    </Col>
                    <Col md={4} lg={3}>
                        <Sidebar/>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-2 pb-2">
                <Row className="mt-5 justify-content-md-center">
                    <Col className="text-center" xs md={8} lg={6}>
                        <Subscribe/>
                    </Col>
                </Row>
            </Container>
            <DiagonalContainer className="my-5 pt-2 pb-4">
                <AllArticlesSection/>
            </DiagonalContainer>
        </>
    );
}

export default Home;