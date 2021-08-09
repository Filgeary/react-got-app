import React, { useState, useEffect, useCallback } from 'react'
import './randomChar.css'
import Api from '../../services/api'

// components
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

function RandomChar() {
  const [char, setChar] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const charLoadedHandler = char => {
    setChar(char)
    setIsLoading(false)
  }

  const errorHandler = err => {
    setIsError(true)
    console.error(err)
  }

  const updateCharHandler = useCallback(() => {
    const api = new Api()
    const id = Math.floor(Math.random() * 1150)
    setIsLoading(true)

    api
      .getCharacter(id)
      .then(data => charLoadedHandler(data))
      .catch(err => errorHandler(err))
  }, [])

  useEffect(() => {
    updateCharHandler()
  }, [updateCharHandler])

  const { name, gender, born, died, culture } = char

  return (
    <div className="random-block rounded">
      {isLoading && !isError ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      <h3 className="random-block__title">
        Random Character: &nbsp;
        <i className="random-block__title-name">{name || 'Unknown'}</i>
      </h3>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender || 'Unknown'}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born || 'Unknown'}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died || 'Unknown'}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture || 'Unknown'}</span>
        </li>
      </ul>

      <button
        type="button"
        className="random-block__control--next-char btn btn-secondary btn-lg"
        onClick={updateCharHandler}
      >
        Next Character
      </button>
    </div>
  )
}

export default RandomChar
