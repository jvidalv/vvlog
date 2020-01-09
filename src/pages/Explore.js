import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {ArticleSnippet} from "../components/ArticleSnippet";

import {DiagonalContainer, InputStyled} from "../styles/GenericStyles";
import {useLocation} from "react-router";
import useT from "../helpers/Translator";
import {useGlobals} from "../contexts/Global";
import {limiter} from "../helpers/Generics";
import {useFilterArticles} from "../hooks/useFilterArticles";
import {EmptyList} from "../components/Others";
import {HelmetExplore} from "../constants/Helmets";

function Explore() {
    const [{language}] = useGlobals();
    const location = useLocation();
    const {state} = location;
    const [q, setQ] = useState(state ? state.q : "");
    const [fArticles] = useFilterArticles(['title', 'category'], q, language);
    return (
        <>
            <HelmetExplore/>
            <Container className="my-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple title={useT("explore")} subtitle={useT("but_dont_get_lost", ['😜'])}/>
                    </Col>
                </Row>
            </Container>
            <Container className="my-3 py-5">
                <Row className="justify-content-md-center">
                    <Col className="text-center" xs md={8} lg={6}>
                        <div className="my-4">
                            <InputStyled
                                className="text-center pulse"
                                placeholder={useT("write_the_query")}
                                value={q}
                                onChange={e => setQ(e.target.value)}
                                big="true"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <DiagonalContainer className="my-5 py-5">
                <Row className="px-2">
                    {fArticles && fArticles.length ? (
                        limiter(fArticles, 12).map(snippet => (
                            <Col key={snippet.id} className="d-flex px-1" sm={6} md={4}>
                                <ArticleSnippet
                                    {...snippet[language]}
                                    categorySlug={snippet.category}
                                    className="justify-content-center move-up mb-2"
                                    q={q}
                                    fake={snippet.fake}
                                />
                            </Col>
                        ))) : <Col lg={12}><EmptyList/></Col>}
                </Row>
            </DiagonalContainer>
        </>
    );
}

export default Explore;
