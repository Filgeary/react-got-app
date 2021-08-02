import React, { Component } from 'react'
import Api from '../../services/api'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'
import './itemList.css'

export default class ItemList extends Component {
  api = new Api()

  state = {
    charsList: null,
    isLoading: true,
    isError: false,
  }

  charsLoadedHandler = charsList => {
    this.setState({ charsList, isLoading: false })
  }

  errorHandler = err => {
    this.setState({ isError: true })
    console.error(err)
  }

  updateCharsHandler = () => {
    const pageNumber = Math.floor(Math.random() * 225)
    this.setState({ isLoading: true })

    this.api
      .getAllCharacters(pageNumber, 5)
      .then(data => this.charsLoadedHandler(data))
      .catch(err => this.errorHandler(err))
  }

  componentDidMount() {
    this.updateCharsHandler()
  }

  render() {
    const { charsList, isLoading, isError } = this.state

    return (
      <>
        <div className="item-list__wrapper">
          {isLoading && !isError ? <Spinner /> : null}
          {isError ? <ErrorMessage /> : null}

          <h3 className="item-list__title">Pick a Hero</h3>
          <ul className="item-list list-group">
            {charsList
              ? charsList.map(char => {
                  return (
                    <li
                      className="list-group-item"
                      tabIndex="0"
                      key={char.name + char.id}
                    >
                      <span>{char.name || 'Unknown'}</span>
                      <i>{char.id}</i>
                    </li>
                  )
                })
              : null}
          </ul>
        </div>

        <button
          type="button"
          className="item-list__control--refresh btn btn-secondary btn-lg btn-block"
          onClick={this.updateCharsHandler}
        >
          Refresh
        </button>
      </>
    )
  }
}
