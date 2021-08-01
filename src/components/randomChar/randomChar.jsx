import React, { Component } from 'react'
import Api from '../../services/api'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'
import './randomChar.css'

export default class RandomChar extends Component {
  constructor() {
    super()
    this.updateChar()
  }
  api = new Api()

  state = {
    char: {
      name: 'Unknown',
      gender: 'Unknown',
      born: 'Unknown',
      died: 'Unknown',
      culture: 'Unknown',
    },
    isLoading: true,
    isError: false,
  }

  loadCharHandler = char => {
    this.setState({ char, isLoading: false })
  }

  errorHandler = err => {
    this.setState({ isError: true })
    console.error(err)
  }

  updateChar() {
    const id = Math.floor(Math.random() * 1150)

    this.api
      .getCharacter(id)
      .then(this.loadCharHandler)
      .catch(err => this.errorHandler(err))
  }

  render() {
    const { name, gender, born, died, culture } = this.state.char
    const { isLoading, isError } = this.state

    return (
      <div className="random-block rounded">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        <h3 className="random-block-title">
          Random Character: &nbsp;
          <i className="random-block-title-name">{name || 'Unknown'}</i>
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
      </div>
    )
  }
}
