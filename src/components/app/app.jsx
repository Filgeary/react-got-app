import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

// components
import Header from '../header/header'
import RandomChar from '../randomChar/randomChar'
import PageCharacters from '../pageCharacters/pageCharacters'
import PageHouses from '../pageHouses/pageHouses'
import PageBooks from '../pageBooks/pageBooks'
import WelcomeScreen from '../welcomeScreen/welcomeScreen'
import NotFoundPage from '../notFoundPage/notFoundPage'

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Switch>
          <Route path="/" exact>
            <WelcomeScreen />
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <RandomChar />
              </Col>
            </Row>
          </Route>

          <Route path="/characters" exact>
            <PageCharacters />
          </Route>
          <Route path="/houses" exact>
            <PageHouses />
          </Route>
          <Route path="/books" exact>
            <PageBooks />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </>
  )
}

export default App
