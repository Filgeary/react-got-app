import React from 'react'
import { Col, Row, Container } from 'reactstrap'

// components
import Header from '../header/header'
import RandomChar from '../randomChar/randomChar'
import ItemList from '../itemList/itemList'
import CharDetails from '../charDetails/charDetails'

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
        <Row>
          <Col md="6">
            <ItemList />
          </Col>
          <Col md="6">
            <CharDetails />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
