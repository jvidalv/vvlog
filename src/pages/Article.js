import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {Sharer, Subscribe} from "../components/MyContents";
import {DiagonalContainer, LoadingPlaceholder} from "../styles/GenericStyles";
import {AuthorWithImage, AuthorWithImageExtended} from "../components/AuthorSection";
import {ArticleContent, ReadingTopBar, Tags} from "../components/ArticleContents";
import {ArticleSidebar} from "../layouts/Sidebar";
import {ArticleSnippet} from "../components/ArticleSnippet";
import {useParams} from "react-router";
import {areSet, multiFilter} from "../helpers/Generics";
import {useFilterArticles} from "../hooks/useFilterArticles";
import {useGlobals} from "../contexts/Global";
import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";

/**
 * @returns {{data: *, loading: *, error: *}}
 */
const useFetchArticle = () => {
    const params = useParams();
    const {data, loading, error} = useFetcher(api_calls.articles.one, {slug : params.slug});
    return {data, loading, error};
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

    return {aArticle}
};

/**
 * Article page
 * @returns {*}
 * @constructor
 */
function Article() {
    const [{language}] = useGlobals();
    const params = useParams();
    const [fArticles] = useFilterArticles(['slug'], params.slug, language);
    const {data, loading, error} = useFetchArticle();
    const {aArticle} = useAArticle(data);

    return (
        <article>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={areSet(fArticles[0], [language, 'title'], <LoadingPlaceholder width="400px" height="95px"/>)}
                            overtitle={areSet(fArticles[0], [language, 'category'], <LoadingPlaceholder width="50px" height="25px"/>)}
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
                        <ArticleContent loading={loading} content={data && data.hasOwnProperty('content') ? data.content : ''}/>
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
