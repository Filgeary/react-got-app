import React, { Component } from 'react'
import './itemDetails.css'

// components
import Api from '../../services/api'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

export default class CharDetails extends Component {
  api = new Api()

  state = {
    item: {
      name: 'Unknown',
      gender: 'Unknown',
      born: 'Unknown',
      died: 'Unknown',
      culture: 'Unknown',
    },
    isLoading: true,
    isError: false,
  }

  itemLoadedHandler = item => {
    this.setState({ item, isLoading: false })
  }

  errorHandler = err => {
    this.setState({ isError: true })
    console.error(err)
  }

  updateItem() {
    if (!this.props.itemId) return

    this.setState({ isLoading: true })

    this.api
      .getCharacter(this.props.itemId)
      .then(data => this.itemLoadedHandler(data))
      .catch(err => this.errorHandler(err))
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  render() {
    const { name, gender, born, died, culture } = this.state.item
    const { isLoading, isError } = this.state

    return (
      <div className="item-details rounded">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        <h3 className="item-details__title">{name || 'Unknown'}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender || 'Unknown'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born || 'Unknown'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died || 'Unknown'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture || 'Unknown'}</span>
          </li>
        </ul>
      </div>
    )
  }
}
