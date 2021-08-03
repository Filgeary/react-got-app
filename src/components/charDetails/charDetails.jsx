import React, { Component } from 'react'
import './charDetails.css'

// components
import Api from '../../services/api'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

export default class CharDetails extends Component {
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

  charLoadedHandler = char => {
    this.setState({ char, isLoading: false })
  }

  errorHandler = err => {
    this.setState({ isError: true })
    console.error(err)
  }

  updateChar() {
    if (!this.props.charId) return

    this.setState({ isLoading: true })

    this.api
      .getCharacter(this.props.charId)
      .then(data => this.charLoadedHandler(data))
      .catch(err => this.errorHandler(err))
  }

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar()
    }
  }

  render() {
    const { name, gender, born, died, culture } = this.state.char
    const { isLoading, isError } = this.state

    return (
      <div className="char-details rounded">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        <h3 className="char-details__title">{name || 'Unknown'}</h3>
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
