import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippetWithImage} from "../components/ArticleSnippet";
import Sidebar from "../layouts/Sidebar";
import {HeroSimple} from "../components/HeroSection";
import {useGlobals} from "../contexts/Global";
import {useParams} from "react-router";
import {areSet} from "../helpers/Generics";
import {LoadingPlaceholder} from "../styles/GenericStyles";
import {useFilterArticles} from "../hooks/useFilterArticles";


function Category() {
    const [{categories, language}] = useGlobals();
    const params = useParams();
    const [fArticles] = useFilterArticles(['category'], params.category);

    return (
        <>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={areSet(categories, [params.category, language, 'name'], <LoadingPlaceholder width="250px" height="40px"/>)}
                            subtitle={areSet(categories, [params.category, language, 'description'], <LoadingPlaceholder width="400px" height="35px"/>)}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col md={9}>
                        {fArticles.map(snippet => (
                            <ArticleSnippetWithImage {...snippet[language]} categorySlug={snippet.category} className="move-up mb-2"/>
                        ))}
                    </Col>
                    <Col md={3}>
                        <Sidebar/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Category;
