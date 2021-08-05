import React, { Component } from 'react'
import './itemList.css'

// components
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

export default class ItemList extends Component {
  state = {
    itemList: null,
    isLoading: true,
    isError: false,
  }

  itemsLoadedHandler = itemList => {
    this.setState({ itemList, isLoading: false })
  }

  errorHandler = err => {
    this.setState({ isError: true })
    console.error(err)
  }

  updateItemsHandler = () => {
    this.setState({ isLoading: true })

    let query = ''
    if (this.props.dataValue === 'allChars') {
      query = String(Math.floor(Math.random() * 110))
    }

    this.props
      .getData(query)
      .then(data => this.itemsLoadedHandler(data))
      .catch(err => this.errorHandler(err))
  }

  componentDidMount() {
    this.updateItemsHandler()
  }

  render() {
    const { itemList, isLoading, isError } = this.state

    return (
      <div className="item-list__wrapper">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        <h3 className="item-list__title">{this.props.title}</h3>
        <ul className="item-list list-group">
          {itemList
            ? itemList.map(item => {
                return (
                  <li
                    className="list-group-item"
                    tabIndex="0"
                    key={item.name + item.id}
                    onClick={() => this.props.onItemSelected(item.id)}
                  >
                    <span>{item.name || 'Unknown'}</span>
                    <i>
                      <small>{item.id}</small>
                    </i>
                  </li>
                )
              })
            : null}
        </ul>

        {this.props.dataValue === 'allChars' ? (
          <button
            type="button"
            className="item-list__control--refresh btn btn-secondary btn-lg"
            onClick={this.updateItemsHandler}
          >
            Refresh
          </button>
        ) : null}
      </div>
    )
  }
}
