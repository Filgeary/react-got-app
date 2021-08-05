import React, { Component } from 'react'
import './itemDetails.css'

// components
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

// render function
export const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field] || 'Unknown'}</span>
    </li>
  )
}

export default class ItemDetails extends Component {
  state = {
    item: {},
    isLoading: false,
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

    this.props
      .getData(this.props.itemId)
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
    const { item } = this.state
    const { isLoading, isError } = this.state

    return (
      <div className="item-details rounded">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        {Object.keys(item).length > 0 ? (
          <h3 className="item-details__title">{item.name || 'Unknown'}</h3>
        ) : (
          <h3 className="item-details__title item-details__title--unselected">
            Select item in left panel
          </h3>
        )}

        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { item })
          })}
        </ul>
      </div>
    )
  }
}
