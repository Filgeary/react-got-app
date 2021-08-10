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
        title="Pick a Hero"
        dataValue="allChars"
        getData={this.api.getAllCharacters}
        onItemSelected={this.changeCharIdHandler}
      />
    )

    const itemDetailsBlock = (
      <ItemDetails
        title="Select a Hero in the left panel"
        itemId={this.state.charId}
        getData={this.api.getCharacter}
      >
        <Field field="gender" label="Gender" />
        <Field field="culture" label="Culture" />
        <Field field="born" label="Born" />
        <Field field="titles" label="Titles" />
        <Field field="aliases" label="Aliases" />
      </ItemDetails>
    )

    return <RowBlock left={itemListBlock} right={itemDetailsBlock} />
  }
}

export default PageCharacters
