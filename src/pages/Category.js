import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippetWithImage} from "../components/ArticleSnippet";
import Sidebar from "../layouts/Sidebar";
import {HeroSimple} from "../components/HeroSection";
import {useGlobals} from "../contexts/Global";
import {useParams} from "react-router";


function Category(props) {
    const [{articles, language}] = useGlobals();
    const params = useParams();
    console.log(params)
    return (
        <>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={`Posts about ${params.category}`}
                            subtitle="One Library to Rule Them All 👑"
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col sm={8}>
                        {articles.map(snipet => (
                            <ArticleSnippetWithImage {...snipet[language]} categorySlug={articles.category} className="move-up mb-2"/>
                        ))}
                    </Col>
                    <Col sm={4}>
                        <Sidebar/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Category;
