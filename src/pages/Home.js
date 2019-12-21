import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippet, ArticleSnippetWithImage} from "../components/ArticleSnippet";

import Sidebar from "../layouts/Sidebar";
import {HeroHome} from "../components/HeroSection";
import {useGlobals} from "../contexts/Global";
import {limiter, multiFilter} from "../helpers/Generics";
import {ContentDiv, DiagonalContainer, H3, TexturedContainer} from "../styles/GenericStyles";
import {Subscribe} from "../components/MyContents";
import {CategoriesCircle} from "../components/Others";

/**
 *
 * @returns {*}
 * @constructor
 */
const FeaturedSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            {limiter(multiFilter(articles, ['featured'], '1'), 3).map(snippet => (
                <ArticleSnippetWithImage key={snippet.id} {...snippet[language]} categorySlug={snippet.category}
                                         fake={snippet.fake}/>
            ))}
        </>
    );
};

/**
 *
 * @returns {*}
 * @constructor
 */
const AllArticlesSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            <Row className="px-2">
                {limiter(articles, 9).map(snippet => (
                    <Col key={snippet.id} className="d-flex px-1" md={6} lg={4}>
                        <ArticleSnippet
                            {...snippet[language]}
                            categorySlug={snippet.category}
                            className="justify-content-center mb-2"
                            fake={snippet.fake}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
};

/**
 *
 * @returns {*}
 * @constructor
 */
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
            <Container className="pt-4 pb-2">
                <Row>
                   <CategoriesCircle/>
                </Row>
            </Container>
            <TexturedContainer className="py-5 my-5">
                <Row className="justify-content-md-center">
                    <Col className="text-center" xs md={8} lg={6}>
                        <Subscribe/>
                    </Col>
                </Row>
            </TexturedContainer>
            <Container className="mt-5 pt-3">
                <Row>
                    <Col>
                        <H3 className="mb-5 text-center">
                        <span role="img" aria-label="rocket">
                        🚀
                        </span>
                            <span>Check them all</span>
                        </H3>
                    </Col>
                </Row>
            </Container>
            <DiagonalContainer className="my-2 py-3">
                <AllArticlesSection/>
            </DiagonalContainer>
        </>
    );
}

export default Home;
