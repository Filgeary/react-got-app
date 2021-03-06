import React, { useState, useEffect } from 'react'
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

const ItemDetails = ({
  title = 'Item is not selected',
  itemId,
  getData,
  children,
}) => {
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const itemLoadedHandler = item => {
    setItem(item)
    setIsLoading(false)
  }

  const errorHandler = err => {
    setIsError(true)
    console.error(err)
  }

  useEffect(() => {
    if (!itemId) return

    setIsLoading(true)

    getData(itemId)
      .then(data => itemLoadedHandler(data))
      .catch(err => errorHandler(err))
  }, [getData, itemId])

  const titleClass = !item.name ? 'item-details__title--unselected' : ''

  return (
    <section className="item-details rounded">
      {isLoading && !isError ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      <h3 className={`item-details__title ${titleClass}`}>
        {item.name || title}
      </h3>

      <ul className="list-group list-group-flush">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { item })
        })}
      </ul>
    </section>
  )
}

ItemDetails.propTypes = {
  title: PropTypes.string,
  itemId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
}

export default ItemDetails
