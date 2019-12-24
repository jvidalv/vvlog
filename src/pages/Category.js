import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {ArticleSnippetWithImage} from "../components/ArticleSnippet";
import Sidebar from "../layouts/Sidebar";
import {HeroSimple} from "../components/HeroSection";
import {useGlobals} from "../contexts/Global";
import {useHistory, useParams} from "react-router";
import {areSet} from "../helpers/Generics";
import {LoadingPlaceholder} from "../styles/GenericStyles";
import {useFilterArticles} from "../hooks/useFilterArticles";
import {HelmetCategory} from "../constants/Helmets";

/**
 * @returns {{fArticles: *}}
 */
const useCategory = () => {
    const [{}, dispatch] = useGlobals();
    const history = useHistory();
    const params = useParams();
    const [fArticles] = useFilterArticles(['category'], params.category);

    const setError = (error) => {
        dispatch({
            type: "setError",
            setError: error
        });
    };

    React.useEffect(() => {
        if (fArticles && !fArticles.length) {
            setError({
                code: 404,
                message: 'category_does_not_exist',
                description: 'category_does_not_exist_or_it_is_no_longer_public'
            });
            history.push("/error");
        }
    }, [fArticles]);

    return {fArticles}
};

/**
 *
 * @returns {*}
 * @constructor
 */
function Category() {
    const [{categories, language}] = useGlobals();
    const params = useParams();
    const {fArticles} = useCategory();

    return (
        <>
            <HelmetCategory params={params}/>
            <Container className="pt-5 text-center">
                <Row>
                    <Col>
                        <HeroSimple
                            image={areSet(categories, [params.category, 'image'], 'loading')}
                            title={areSet(categories, [params.category, language, 'name'], <LoadingPlaceholder
                                width="250px" height="40px"/>)}
                            subtitle={areSet(categories, [params.category, language, 'description'], <LoadingPlaceholder
                                width="400px" height="35px"/>)}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col md={9}>
                        {fArticles.map(snippet => (
                            <ArticleSnippetWithImage key={snippet.id} {...snippet[language]}
                                                     categorySlug={snippet.category} className="mb-2"
                                                     fake={snippet.fake}/>
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
