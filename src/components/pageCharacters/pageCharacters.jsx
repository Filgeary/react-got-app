import React, { Component } from 'react'
import Api from '../../services/api'

// components
import ItemList from '../itemList/itemList'
import ItemDetails, { Field } from '../itemDetails/itemDetails'
import RowBlock from '../rowBlock/rowBlock'

class PageCharacters extends Component {
  api = new Api()

  state = {
    charId: '',
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

    const itemDetailsBlock = (
      <ItemDetails
        itemId={this.state.charId}
        getData={this.api.getCharacter}
        dataValue="char"
        title="Select a Hero in left panel"
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    )

    return <RowBlock left={itemListBlock} right={itemDetailsBlock} />
  }
}

export default PageCharacters
