import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippet, ArticleSnippetWithImage} from "../components/ArticleSnippet";

import Sidebar from "../layouts/Sidebar";
import {HeroHome} from "../components/HeroSection";
import {DiagonalContainer, H3} from "../styles/GenericStyles";
import {Subscribe} from "../components/MyContents";
import {useGlobals} from "../contexts/Global";

const FeaturedSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            {articles.map(snippet => (
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
                {articles.map(snipet => (
                    <Col className="d-flex px-1" sm={6} md={4}>
                        <ArticleSnippet
                            {...snipet[language]}
                            categorySlug={articles.category}
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
                    <Col md={8}>
                        <FeaturedSection/>
                    </Col>
                    <Col md={4}>
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
