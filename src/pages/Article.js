import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {HeroSimple} from "../components/HeroSection";
import {Sharer, Subscribe} from "../components/MyContents";
import {DiagonalContainer, LoadingPlaceholder} from "../styles/GenericStyles";
import {AuthorWithImage, AuthorWithImageExtended} from "../components/AuthorSection";
import {ArticleContent, ReadingTopBar, Tags} from "../components/ArticleContents";
import {ArticleSidebar} from "../layouts/Sidebar";
import {ArticleSnippet} from "../components/ArticleSnippet";
import {useHistory, useParams} from "react-router";
import {areSet, limiter, multiFilter} from "../helpers/Generics";
import {useGlobals} from "../contexts/Global";
import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";
import useT from "../helpers/Translator";
import {D_AARTICLE} from "../constants/Dummy";

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
 * Sets active article
 * @returns {{aArticle: *}}
 */
const useAArticle = () => {
    const [{aArticle, language, categories}, dispatch] = useGlobals();
    const {data, loading, error, setRefetch} = useFetchArticle();
    const params = useParams();
    const history = useHistory();

    const setAArticle = (aArticle) => {
        dispatch({
            type: "setActiveArticle",
            setActiveArticle: aArticle
        });
    };

    useEffect(() => {
        if (data.id) {
            setAArticle(data);
        }
    }, [data]);

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
            } else if (params.slug !== aArticle.slug) {
                setAArticle(D_AARTICLE);
                setRefetch(Date());
            }
        }
    }, [language, history.location]);

    return {data, loading}
};

/**
 * Fetches related articles
 * @returns {{data: *, loading: *, error: *}}
 */
const useFetchRelatedArticles = () => {
    const [{aArticle}] = useGlobals();
    const {data, loading, error, setRefetch} = useFetcher(api_calls.articles.related, {id: aArticle.id, limit : 3, category_id : aArticle.category_id});
    return {related : data, loading, error, setRelated : setRefetch}
};

/**
 * Sets active article
 * @returns {{aArticle: *}}
 */
const useRelatedArticles = () => {
    const [{aArticle, language, categories}, dispatch] = useGlobals();
    const {related, loading, error, setRelated} = useFetchRelatedArticles();

    useEffect(() => {

    }, [aArticle]);

    return {related}
};

/**
 * Article page
 * @returns {*}
 * @constructor
 */
function Article() {
    const [{language, aArticle, articles, categories}] = useGlobals();
    const {data, loading} = useAArticle();

    return (
        <article>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={areSet(aArticle, ['title'], <LoadingPlaceholder width="400px"
                                                                                   height="95px"/>)}
                            overtitle={areSet(aArticle, ['category_nice'], <LoadingPlaceholder width="100px" height="35px"/>)}
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
                    {limiter(articles, 3).map(snippet => (
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
    );
}

export default Article;
