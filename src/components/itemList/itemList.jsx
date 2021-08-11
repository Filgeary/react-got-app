import React, { useState, useEffect, useCallback } from 'react'
import './itemList.css'
import PropTypes from 'prop-types'
import { randomInt } from '../../utils/utils'

// components
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

const ItemList = ({
  title = 'Select Item',
  dataValue,
  getData,
  onItemSelected,
}) => {
  const [itemList, setItemList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const itemsLoadedHandler = itemList => {
    setItemList(itemList)
    setIsLoading(false)
    setIsError(false)
  }

  const errorHandler = err => {
    setIsError(true)
    console.error(err)
  }

  const updateItemsHandler = useCallback(() => {
    setIsLoading(true)

    let query = ''
    const pageSizeCount = 10

    switch (dataValue) {
      case 'allChars':
        query = String(Math.floor(randomInt(1, 1136) / pageSizeCount))
        break
      case 'allHouses':
        query = String(Math.floor(randomInt(1, 444) / pageSizeCount))
        break
      default:
        query = ''
    }

    getData(query)
      .then(data => itemsLoadedHandler(data))
      .catch(err => errorHandler(err))
  }, [dataValue, getData])

  useEffect(() => {
    updateItemsHandler()
  }, [updateItemsHandler])

  return (
    <section className="item-list__wrapper">
      {isLoading && !isError ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      <h3 className="item-list__title">{title}</h3>
      <ul className="item-list list-group">
        {itemList.length > 0
          ? itemList.map(item => {
              return (
                <li
                  className="list-group-item"
                  tabIndex="0"
                  key={item.name + item.id}
                  onClick={() => onItemSelected(item.id)}
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

      {dataValue !== 'allBooks' ? (
        <button
          type="button"
          className="item-list__control--refresh btn btn-secondary btn-lg"
          onClick={updateItemsHandler}
        >
          Refresh
        </button>
      ) : null}
    </section>
  )
}

ItemList.propTypes = {
  title: PropTypes.string,
  dataValue: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
}

export default ItemList
