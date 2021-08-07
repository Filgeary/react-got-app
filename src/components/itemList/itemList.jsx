import React, { Component } from 'react'
import './itemList.css'
import PropTypes from 'prop-types'

// components
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

const randomInt = (min, max) => {
  const number = min + Math.random() * (max + 1 - min)
  return Math.floor(number)
}

export default class ItemList extends Component {
  static defaultProps = {
    title: 'Select Item',
  }

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

    switch (this.props.dataValue) {
      case 'allChars':
        query = String(Math.floor(randomInt(1, 1136) / 10))
        break
      case 'allHouses':
        query = String(Math.floor(randomInt(1, 444) / 10))
        break
      default:
        query = ''
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

        {this.props.dataValue !== 'allBooks' ? (
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

ItemList.propTypes = {
  title: PropTypes.string,
  dataValue: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
}
