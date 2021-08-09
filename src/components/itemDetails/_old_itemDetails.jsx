import React, { Component } from 'react'
import './itemDetails.css'
import PropTypes from 'prop-types'

// components
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

// render function
export const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="label">{label}</span>
      <span className="label-desc">{item[field] || 'Unknown'}</span>
    </li>
  )
}

export default class ItemDetails extends Component {
  static defaultProps = {
    title: 'Item is not selected',
  }

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
    const titleClass = !item.name ? 'item-details__title--unselected' : ''

    return (
      <div className="item-details rounded">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        <h3 className={`item-details__title ${titleClass}`}>
          {item.name || this.props.title}
        </h3>

        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { item })
          })}
        </ul>
      </div>
    )
  }
}

ItemDetails.propTypes = {
  title: PropTypes.string,
  dataValue: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
}
