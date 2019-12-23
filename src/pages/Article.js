import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {Sharer, Subscribe} from "../components/MyContents";
import {DiagonalContainer, H3, HR, LoadingPlaceholder} from "../styles/GenericStyles";
import {AuthorWithImage, AuthorWithImageExtended} from "../components/AuthorSection";
import {ArticleContent, ReadingTopBar, Tags} from "../components/ArticleContents";
import {ArticleSidebar} from "../layouts/Sidebar";
import {ArticleSnippet} from "../components/ArticleSnippet";
import {useHistory, useParams} from "react-router";
import {areSet, limiter} from "../helpers/Generics";
import {useGlobals} from "../contexts/Global";
import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";
import useT from "../helpers/Translator";
import {D_AARTICLE, D_ARTICLES} from "../constants/Dummy";
import Helmet from "react-helmet/es/Helmet";
import {HelmetArticle} from "../constants/Helmets";

/**
 * Fetches current article
 * @returns {{data: *, loading: *, error: *}}
 */
const useFetchArticle = () => {
    const params = useParams();
    const {data, loading, error, setRefetch} = useFetcher(api_calls.articles.one, {slug: params.slug});
    return {data, loading, error, setRefetch}
};

/**
 * Fetches related articles
 * @returns {{data: *, loading: *, error: *}}
 */
const useFetchRelatedArticles = () => {
    const params = useParams();
    const {data, loading, error, setRefetch} = useFetcher(api_calls.articles.related, {slug: params.slug, limit: 3});
    return {dataRelated: data, loading, error, setRefetchRelated: setRefetch}
};

/**
 * Sets active article
 * @returns {{aArticle: *}}
 */
const useAArticle = () => {
    const [{aArticle, language, categories}, dispatch] = useGlobals();
    const {data, error, loading, setRefetch} = useFetchArticle();
    const {dataRelated, setRefetchRelated} = useFetchRelatedArticles();
    const params = useParams();
    const history = useHistory();

    const setAArticle = (aArticle) => {
        dispatch({
            type: "setActiveArticle",
            setActiveArticle: aArticle
        });
    };

    const setRelatedArticles = (relatedArticles) => {
        dispatch({
            type: "setRelatedArticles",
            setRelatedArticles: relatedArticles
        });
    };

    const setError = (error) => {
        dispatch({
            type: "setError",
            setError: error
        });
    };

    useEffect(() => {
        setAArticle(D_AARTICLE);
        if (data && data.id) {
            setAArticle(data);
        }
        // If something wrong happens
        if (error) {
            setError({
                code: 404,
                message: 'article_does_not_exist',
                description: 'article_does_not_exist_or_it_is_no_longer_public'
            });
            history.push("/error");
        }
    }, [data, error]);

    useEffect(() => {
        if (dataRelated[0]) {
            setRelatedArticles(dataRelated);
        }
    }, [dataRelated]);

    /**
     * Here we control the switches between language and back and forth, so the data always stays veridic
     * with the current language and current slug
     */
    useEffect(() => {
        if (!aArticle.fake && !loading) {
            if (aArticle.language_id !== language) {
                history.push("/" + categories[params.category]['code'] + '/' + aArticle.translations[language]);
                setAArticle(D_AARTICLE);
                setRefetch(Date());
                setRelatedArticles(limiter(D_ARTICLES, 4),);
                setRefetchRelated(Date());
            } else if (params.slug !== aArticle.slug) {
                setAArticle(D_AARTICLE);
                setRefetch(Date());
                setRelatedArticles(limiter(D_ARTICLES, 4),);
                setRefetchRelated(Date());
            }
        }
    }, [language, history.location]);

    return {data, loading, dataRelated}
};

/**
 * Article page
 * @returns {*}
 * @constructor
 */
function Article() {
    const [{language, articles, aArticle, relatedArticles}] = useGlobals();
    const {data, loading, dataRelated} = useAArticle();

    return (
        <>
            <HelmetArticle aArticle={aArticle}/>
            <article>
                <Container className="pt-5 text-center">
                    <Row>
                        <Col>
                            <HeroSimple
                                title={areSet(aArticle, ['title'], <LoadingPlaceholder width="400px"
                                                                                       height="95px"/>)}
                                overtitle={areSet(aArticle, ['category_nice'], <LoadingPlaceholder width="100px"
                                                                                                   height="35px"/>)}
                                urlOvertitle={'/' + aArticle.category_code}
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
                        </Col>
                        <Col>
                            <ArticleSidebar/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Sharer className="my-4 text-center justify-content-center"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <HR/>
                            <H3> {useT('more_of_vvlog', ['👀'])} </H3>
                        </Col>
                    </Row>
                </Container>
                <DiagonalContainer>
                    <Row className="my-5">
                        {relatedArticles.map(snippet => (
                            <Col key={snippet.id} className="d-flex px-1" sm={6} md={6}>
                                <ArticleSnippet className="justify-content-center mb-2" {...snippet[language]}
                                                categorySlug={snippet.category} fake={snippet.fake}/>
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
        </>
    );
}

export default Article;
