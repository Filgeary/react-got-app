import React from 'react'
import { Col, Row, Container } from 'reactstrap'

// components
import Header from '../header/header'
import RandomChar from '../randomChar/randomChar'
import PageCharacters from '../pageCharacters/pageCharacters'
import PageHouses from '../pageHouses/pageHouses'

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Row>
          <Col lg={{ size: 6, offset: 0 }}>
            <RandomChar />
          </Col>
        </Row>

        <PageCharacters />
        <PageHouses />
      </Container>
    </>
  )
}

export default App
