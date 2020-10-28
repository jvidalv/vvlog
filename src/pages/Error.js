import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroSimple } from '../components/HeroSection'
import { useGlobals } from '../contexts/Global'
import useT from '../helpers/Translator'
import { P } from '../styles/GenericStyles'
import { HelmetError } from '../constants/Helmets'

/**
 * @returns {*}
 * @constructor
 */
function Error() {
  const [{ error }] = useGlobals()
  return (
    <>
      <HelmetError />
      <Container
        className="d-flex flex-column justify-content-center align-items-center pt-5 text-center"
        style={{ minHeight: '500px' }}>
        <Row>
          <Col>
            <HeroSimple title={error.code} subtitle={useT(error.message)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <P>{useT(error.description)}</P>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Error
