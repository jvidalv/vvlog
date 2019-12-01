import React, {useState, useEffect} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {ArticleSnippet} from "../components/ArticleSnippet";

import {DiagonalContainer, H1, InputStyled} from "../styles/GenericStyles";
import {useLocation} from "react-router";
import useT from "../helpers/Translator";
import {useGlobals} from "../contexts/Global";
import {limiter, multiFilter} from "../helpers/Generics";
import {useFilterArticles} from "../hooks/useFilterArticles";

function Explore() {
    const [{language}] = useGlobals();
    const location = useLocation();
    const {state} = location;
    const [q, setQ] = useState(state ? state.q : null);
    const [fArticles] = useFilterArticles(['title', 'category'], q ? q : (state ? state.q : null), language);

    return (
        <>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple title={useT("explore")} subtitle={useT("but_dont_get_lost", ['😜'])}/>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="justify-content-md-center">
                    <Col className="text-center" xs md={8} lg={6}>
                        <Form className="my-4">
                            <InputStyled
                                className="text-center pulse"
                                placeholder={useT("write_the_query")}
                                value={q}
                                onChange={e => setQ(e.target.value)}
                                big
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
            <DiagonalContainer>
                <Row className="px-2">
                    {fArticles && fArticles.length ? (
                        limiter(fArticles, 12).map(snippet => (
                            <>
                                <Col className="d-flex px-1" sm={6} md={4}>
                                    <ArticleSnippet
                                        {...snippet[language]}
                                        categorySlug={snippet.category}
                                        className="justify-content-center move-up mb-2"
                                        q={q}
                                    />
                                </Col>
                            </>
                        ))) : <Col sm={12}><ArticleSnippet title="" category=""  q={q}/></Col>}
                </Row>
            </DiagonalContainer>
        </>
    );
}

export default Explore;

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
    },
    {
        id: 4,
        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        slug: "lorem-ipsum-dolor-sir-amet",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: ""
    },
    {
        id: 5,

        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
        slug: "lorem-ipsum-dolor-sir-amet",
        date: ""
    },
    {
        id: 11,

        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
        slug: "lorem-ipsum-dolor-sir-amet",
        date: ""
    },
    {
        id: 6,

        category: "React",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        date: "",
        slug: "lorem-ipsum-dolor-sir-amet"
    },
    {
        id: 7,
        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        slug: "lorem-ipsum-dolor-sir-amet",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: ""
    },
    {
        id: 8,

        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
        slug: "lorem-ipsum-dolor-sir-amet",
        date: ""
    },
    {
        id: 9,

        category: "React",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        date: "",
        slug: "lorem-ipsum-dolor-sir-amet"
    },
    {
        id: 10,
        category: "React",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        slug: "lorem-ipsum-dolor-sir-amet",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: ""
    },

    {
        id: 12,

        category: "React",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
        resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        date: "",
        slug: "lorem-ipsum-dolor-sir-amet"
    }
];
