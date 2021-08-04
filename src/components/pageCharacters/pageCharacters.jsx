import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

// components
import ItemList from '../itemList/itemList'
import ItemDetails from '../itemDetails/itemDetails'

class PageCharacters extends Component {
  state = {
    charId: 583,
  }

  changeCharIdHandler = id => {
    this.setState({ charId: id })
  }

  render() {
    return (
      <>
        <Row>
          <Col md="6">
            <ItemList onItemSelected={this.changeCharIdHandler} />
          </Col>

          <Col md="6">
            <ItemDetails itemId={this.state.charId} />
          </Col>
        </Row>
      </>
    )
  }
}

export default PageCharacters
