import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {Sharer, Subscribe} from "../components/MyContents";
import {DiagonalContainer} from "../styles/GenericStyles";
import {AuthorWithImage, AuthorWithImageExtended} from "../components/AuthorSection";
import {ArticleContent, ReadingTopBar, Tags} from "../components/ArticleContents";
import {ArticleSidebar} from "../layouts/Sidebar";
import {ArticleSnippet} from "../components/ArticleSnippet";

function Article(props) {
    const {title, resume, category, content} = article;
    return (
        <article>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={title}
                            overtitle={category}
                            urlOvertitle={"/" + category.toLocaleLowerCase()}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="py-3">
                <Row noGutters className="justify-content-center align-items-center">
                    <Col xs md={10} lg={8}>
                        <AuthorWithImage/>
                    </Col>
                </Row>
            </Container>
            <Container className="py-4">
                <Row>
                    <Col xs={12} md={12} lg={9}>
                        <ArticleContent/>
                        <Tags/>
                        <AuthorWithImageExtended/>
                        <Sharer className="my-5 text-center justify-content-center"/>
                    </Col>
                    <Col>
                        <ArticleSidebar/>
                    </Col>
                </Row>
            </Container>
            <DiagonalContainer>
                <Row className="justify-content-center my-5 py-2">
                    <Col className="text-center"></Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <HeroSimple title="More of vvlog 👀"/>
                    </Col>
                </Row>
                <Row className="justify-content-center my-5">
                    {snipperts.map(article => (
                        <Col className="d-flex">
                            <ArticleSnippet className="justify-content-center" {...article} />
                        </Col>
                    ))}
                </Row>
            </DiagonalContainer>
            <Container>
                <Row className="justify-content-center my-5 py-5">
                    <Col className="text-center" xs md={8} lg={6}>
                        <Subscribe/>
                    </Col>
                </Row>
            </Container>
            <ReadingTopBar/>
        </article>
    );
}

export default Article;

const article = {
    id: 1,
    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    slug: "lorem-ipsum-dolor-sir-amet",
    resume:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
};

const snipperts = [
    {
        id: 1,
        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        slug: "lorem-ipsum-dolor-sir-amet",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: ""
    },
    {
        id: 2,

        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
        slug: "lorem-ipsum-dolor-sir-amet",
        date: ""
    },
    {
        id: 3,

        category: "React",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        date: "",
        slug: "lorem-ipsum-dolor-sir-amet"
    }
];
