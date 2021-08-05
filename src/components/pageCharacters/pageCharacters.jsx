import React, { Component } from 'react'
import Api from '../../services/api'

// components
import ItemList from '../itemList/itemList'
import ItemDetails from '../itemDetails/itemDetails'
import RowBlock from '../rowBlock/rowBlock'

class PageCharacters extends Component {
  api = new Api()

  state = {
    charId: null,
  }

  changeCharIdHandler = id => {
    this.setState({ charId: id })
  }

  render() {
    const itemListBlock = (
      <ItemList
        onItemSelected={this.changeCharIdHandler}
        getData={this.api.getAllCharacters}
        dataValue="allChars"
        title="Pick a Hero"
      />
    )

    const itemDetailsBlock = <ItemDetails itemId={this.state.charId} />

    return <RowBlock left={itemListBlock} right={itemDetailsBlock} />
  }
}

export default PageCharacters
