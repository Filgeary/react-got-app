import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

// components
import Header from '../header/header'
import RandomChar from '../randomChar/randomChar'
import PageCharacters from '../pageCharacters/pageCharacters'
import PageHouses from '../pageHouses/pageHouses'
import PageBooks from '../pageBooks/pageBooks'

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Switch>
          <Route path="/" exact>
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <RandomChar />
              </Col>
            </Row>
          </Route>

          <Route path="/characters">
            <PageCharacters />
          </Route>
          <Route path="/houses">
            <PageHouses />
          </Route>
          <Route path="/books">
            <PageBooks />
          </Route>
        </Switch>
      </Container>
    </>
  )
}

export default App
