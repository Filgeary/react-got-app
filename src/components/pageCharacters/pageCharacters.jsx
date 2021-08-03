import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

// components
import ItemList from '../itemList/itemList'
import CharDetails from '../charDetails/charDetails'

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
            <ItemList onChangeCharId={this.changeCharIdHandler} />
          </Col>

          <Col md="6">
            <CharDetails charId={this.state.charId} />
          </Col>
        </Row>
      </>
    )
  }
}

export default PageCharacters
