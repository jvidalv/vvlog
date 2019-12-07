import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {Sharer, Subscribe} from "../components/MyContents";
import {DiagonalContainer, LoadingPlaceholder} from "../styles/GenericStyles";
import {AuthorWithImage, AuthorWithImageExtended} from "../components/AuthorSection";
import {ArticleContent, ReadingTopBar, Tags} from "../components/ArticleContents";
import {ArticleSidebar} from "../layouts/Sidebar";
import {ArticleSnippet} from "../components/ArticleSnippet";
import {useHistory, useParams} from "react-router";
import {areSet} from "../helpers/Generics";
import {useFilterArticles} from "../hooks/useFilterArticles";
import {useGlobals} from "../contexts/Global";
import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";
import useT from "../helpers/Translator";
import {D_AARTICLE} from "../constants/Dummy";

/**
 * @returns {{data: *, loading: *, error: *}}
 */
const useFetchArticle = () => {
    const [{language}] = useGlobals();
    const params = useParams();
    return useFetcher(api_calls.articles.one, {slug: params.slug});
};

/**
 * Sets active article
 * @param data
 * @returns {{aArticle: *}}
 */
const useAArticle = (data) => {
    const [{aArticle}, dispatch] = useGlobals();
    const setAArticle = (aArticle) => {
        dispatch({
            type: "setActiveArticle",
            setActiveArticle: aArticle
        });
    };

    useEffect(() => {
        if (data.id) {
            setAArticle(data)
        }
    }, [data]);

    return {}
};

/**
 * Article page
 * @returns {*}
 * @constructor
 */
function Article() {
    const [{language, aArticle, articles, categories}] = useGlobals();
    const history = useHistory();
    const params = useParams();
    const [fArticles] = useFilterArticles(['slug'], params.slug, language);
    const {data, loading, error, setRefetch} = useFetchArticle();
    const {} = useAArticle(data);

    /**
     * Handler case user switches language of article
     * Pushes the new slug to the url and refetches data from api for the new article
     */
    useEffect(() => {
        if(fArticles[0].id && aArticle.slug !== fArticles[0][language].slug){
            history.push("/" + categories[params.category]['code'] + '/' + fArticles[0][language].slug);
            setRefetch(true)
        }
    }, [language]);

    return (
        <article>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={areSet(fArticles[0], [language, 'title'], <LoadingPlaceholder width="400px"
                                                                                                 height="95px"/>)}
                            overtitle={areSet(fArticles[0], [language, 'category'], <LoadingPlaceholder width="50px"
                                                                                                        height="25px"/>)}
                            urlOvertitle={'/' + (areSet(fArticles[0], ['category'], '#'))}
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
                        <ArticleContent loading={loading}
                                        content={data && data.hasOwnProperty('content') ? data.content : ''}/>
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
                <Row>
                    <Col className="text-center">
                        <HeroSimple title={useT('more_of_vvlog', ['👀'])}/>
                    </Col>
                </Row>
                <Row className="my-5">
                    {snipperts.map(article => (
                        <Col className="d-flex px-1" sm={6} md={4}>
                            <ArticleSnippet className="justify-content-center move-up mb-2" {...article} />
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
];
