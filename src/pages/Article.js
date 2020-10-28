import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { HeroSimple } from '../components/HeroSection'
import { Sharer, Subscribe } from '../components/MyContents'
import {
  DiagonalContainer,
  H3,
  HR,
  LoadingPlaceholder,
  TexturedContainer,
} from '../styles/GenericStyles'
import { AuthorWithImage, AuthorWithImageExtended } from '../components/AuthorSection'
import { ArticleContent, Claps, ReadingTopBar, Tags } from '../components/ArticleContents'
import { ArticleSidebar } from '../layouts/Sidebar'
import { ArticleSnippet } from '../components/ArticleSnippet'
import { useHistory, useParams } from 'react-router'
import { areSet } from '../helpers/Generics'
import { useGlobals } from '../contexts/Global'
import { useFetcher } from '../hooks/useFetcher'
import api_calls from '../constants/Api'
import useT from '../helpers/Translator'
import { D_AARTICLE } from '../constants/Dummy'
import { HelmetArticle } from '../constants/Helmets'
import { articlesOne } from '../helpers/data-transformations'

/**
 * Sets active article
 * @returns {{aArticle: *}}
 */
const useAArticle = () => {
  const [{ language }, dispatch] = useGlobals()
  const { slug } = useParams()

  const setAArticle = (aArticle) => {
    dispatch({
      type: 'setActiveArticle',
      setActiveArticle: aArticle,
    })
  }

  const setRelatedArticles = (relatedArticles) => {
    dispatch({
      type: 'setRelatedArticles',
      setRelatedArticles: relatedArticles,
    })
  }

  useEffect(() => {
    setAArticle(articlesOne(slug))
  }, [])

  useEffect(() => {
    //setRelatedArticles(dataRelated)
  }, [])
}

/**
 * Article page
 * @returns {*}
 * @constructor
 */
function Article() {
  const [{ language, articles, aArticle, relatedArticles }] = useGlobals()
  useAArticle()

  return (
    <>
      {!aArticle.fake ? <HelmetArticle language={language} aArticle={aArticle} /> : null}
      <article>
        <Container className="pt-5 text-center">
          <Row>
            <Col>
              <HeroSimple
                title={areSet(
                  aArticle,
                  ['title'],
                  <LoadingPlaceholder width="400px" height="95px" />,
                )}
                overtitle={areSet(
                  aArticle,
                  ['category_nice'],
                  <LoadingPlaceholder width="100px" height="35px" />,
                )}
                urlOvertitle={'/' + language + '/' + aArticle.category_code}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-3 mb-1">
          <Row noGutters className="justify-content-center align-items-center">
            <Col xs md={10} lg={8}>
              <AuthorWithImage />
            </Col>
          </Row>
        </Container>
        <Container className="py-4">
          <Row>
            <Col xs={12} md={12} lg={9}>
              <ArticleContent loading={false} content={aArticle.content} />
              <Row className="my-5 py-3 align-items-center">
                <Col xs={6} md={8} className="d-flex align-items-center">
                  <Tags />
                </Col>
                <Col xs={6} md={4}>
                  {aArticle.fake ? null : <Claps />}
                </Col>
              </Row>
              <AuthorWithImageExtended />
            </Col>
            <Col>
              <ArticleSidebar />
            </Col>
          </Row>
        </Container>
        <Container className="py-2 my-2">
          <Row>
            <Col>
              <Sharer className="my-4 text-center justify-content-center" />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <HR />
            </Col>
          </Row>
        </Container>
        <DiagonalContainer className="py-5 my-5">
          <Row>
            <Col className="text-center">
              <H3> {useT('more_of_vvlog', ['👀'])} </H3>
            </Col>
          </Row>
          {/*<Row className="my-5">*/}
          {/*  {relatedArticles.map((snippet) => (*/}
          {/*    <Col key={snippet.id} className="d-flex px-1" sm={6} md={6}>*/}
          {/*      <ArticleSnippet*/}
          {/*        className="justify-content-center mb-2"*/}
          {/*        {...snippet[language]}*/}
          {/*        categorySlug={snippet.category}*/}
          {/*        fake={snippet.fake}*/}
          {/*      />*/}
          {/*    </Col>*/}
          {/*  ))}*/}
          {/*</Row>*/}
        </DiagonalContainer>
        <TexturedContainer
          fluid
          className="d-flex justify-content-center align-items-center py-5 my-5 overflow-hidden min-height-300">
          <Row>
            <Col className="text-center">
              <Subscribe />
            </Col>
          </Row>
        </TexturedContainer>
        <ReadingTopBar />
      </article>
    </>
  )
}

export default Article
