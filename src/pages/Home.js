import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippet, ArticleSnippetWithImage} from "../components/ArticleSnippet";

import Sidebar from "../layouts/Sidebar";
import {HeroHome} from "../components/HeroSection";
import {useGlobals} from "../contexts/Global";
import {limiter, multiFilter} from "../helpers/Generics";
import {H3, TexturedContainer} from "../styles/GenericStyles";
import {Subscribe} from "../components/MyContents";
import {CategoriesCircle} from "../components/Others";
import {HelmetHome} from "../constants/Helmets";
import useT from "../helpers/Translator";

/**
 * @returns {*}
 * @constructor
 */
const FeaturedSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            {limiter(multiFilter(articles, ['featured'], '1'), 4).map(snippet => (
                <ArticleSnippetWithImage key={snippet.id} {...snippet[language]} categorySlug={snippet.category}
                                         fake={snippet.fake}/>
            ))}
        </>
    );
};

/**
 * @returns {*}
 * @constructor
 */
const AllArticlesSection = () => {
    const [{articles, language}] = useGlobals();
    return (
        <>
            {
                limiter(multiFilter(articles, ['featured'], '0'), 9).map(snippet => (
                    <Col key={snippet.id} className="d-flex px-1" md={6} lg={4}>
                        <ArticleSnippet
                            {...snippet[language]}
                            categorySlug={snippet.category}
                            className="justify-content-center mb-2"
                            fake={snippet.fake}
                        />
                    </Col>
                ))
            }
        </>
    );
};

/**
 * @returns {*}
 * @constructor
 */
function Home() {
    return (
        <>
            <HelmetHome/>
            <HeroHome/>
            <Container className="pt-5 mt-5 mb-2 pb-2">
                <Row>
                    <Col>
                        <H3 fontRecursive className="mb-5 text-center">
                        <span className="pr-2" role="img" aria-label="rocket">
                        ⭐
                        </span>
                            <span>{useT('featured')}</span>
                        </H3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FeaturedSection/>
                    </Col>
                </Row>
            </Container>
            <Container className="py-5 mb-5 mt-3">
                <Row>
                    <CategoriesCircle/>
                </Row>
            </Container>
            <TexturedContainer fluid className="d-flex justify-content-center align-items-center py-5 my-5 overflow-hidden min-height-300">
                <Row>
                    <Col className="text-center">
                        <Subscribe/>
                    </Col>
                </Row>
            </TexturedContainer>
            <Container className="py-5 my-5">
                <Row>
                    <Col>
                        <H3 fontRecursive className="mb-5 text-center">
                        <span className="pr-2" role="img" aria-label="rocket">
                        🚀
                        </span>
                            <span>{useT('check_them_all')}</span>
                        </H3>
                    </Col>
                </Row>
                <Row>
                    <AllArticlesSection/>
                </Row>
            </Container>
        </>
    );
}

export default Home;
