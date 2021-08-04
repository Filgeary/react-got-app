import React, { Component } from 'react'
import './itemList.css'

// components
import Api from '../../services/api'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

export default class ItemList extends Component {
  api = new Api()

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
    const pageNumber = Math.floor(Math.random() * 225)
    this.setState({ isLoading: true })

    this.api
      .getAllCharacters(pageNumber, 5)
      .then(data => this.itemsLoadedHandler(data))
      .catch(err => this.errorHandler(err))
  }

  componentDidMount() {
    this.updateItemsHandler()
  }

  render() {
    const { itemList, isLoading, isError } = this.state

    return (
      <>
        <div className="item-list__wrapper">
          {isLoading && !isError ? <Spinner /> : null}
          {isError ? <ErrorMessage /> : null}

          <h3 className="item-list__title">Pick a Hero</h3>
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
          <button
            type="button"
            className="item-list__control--refresh btn btn-secondary btn-lg"
            onClick={this.updateItemsHandler}
          >
            Refresh
          </button>
        </div>
      </>
    )
  }
}
