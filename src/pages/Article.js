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
import {areSet, limiter} from "../helpers/Generics";
import {useFilterArticles, useFindArticleInArticles} from "../hooks/useFilterArticles";
import {useGlobals} from "../contexts/Global";
import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";
import useT from "../helpers/Translator";

/**
 * @returns {{data: *, loading: *, error: *}}
 */
const useFetchArticle = () => {
    const [{language}] = useGlobals();
    const params = useParams();
    const {data, loading, error, setRefetch} = useFetcher(api_calls.articles.one, {slug: params.slug});
    return {article : data, loading, error, setRefetch}
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
    const [fArticle] = useFindArticleInArticles(['slug'], params.slug);
    const {article, loading, error, setRefetch} = useFetchArticle();
    const {} = useAArticle(article);

    /**
     * Handler case user switches language of article
     * Pushes the new slug to the url and refetches data from api for the new article
     */
    useEffect(() => {
        if (!fArticle.fake && aArticle.language_id !== language) {
            history.push("/" + categories[params.category]['code'] + '/' + fArticle[language].slug);
            setRefetch(Date())
        }
    }, [language]);

    return (
        <article>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            title={areSet(fArticle, [language, 'title'], <LoadingPlaceholder width="400px"
                                                                                                 height="95px"/>)}
                            overtitle={areSet(fArticle, [language, 'category'], <LoadingPlaceholder width="50px"
                                                                                                        height="25px"/>)}
                            urlOvertitle={'/' + (areSet(fArticle, ['category'], '#'))}
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
                                        content={article && article.hasOwnProperty('content') ? article.content : ''}/>
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
