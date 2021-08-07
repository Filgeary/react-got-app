import React, { Component } from 'react'
import Api from '../../services/api'

// components
import ItemList from '../itemList/itemList'
import ItemDetails, { Field } from '../itemDetails/itemDetails'
import RowBlock from '../rowBlock/rowBlock'

class PageBooks extends Component {
  api = new Api()

  state = {
    bookId: '',
  }

  changeBookIdHandler = id => {
    this.setState({ bookId: id })
  }

  render() {
    const itemListBlock = (
      <ItemList
        title="Pick a Book"
        dataValue="allBooks"
        onItemSelected={this.changeBookIdHandler}
        getData={this.api.getAllBooks}
      />
    )

    const itemDetailsBlock = (
      <ItemDetails
        title="Select a Book in the left panel"
        dataValue="book"
        itemId={this.state.bookId}
        getData={this.api.getBook}
      >
        <Field field="authors" label="Authors" />
        <Field field="numberOfPages" label="Number&nbsp;Of&nbsp;Pages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    )

    return <RowBlock left={itemListBlock} right={itemDetailsBlock} />
  }
}

export default PageBooks
