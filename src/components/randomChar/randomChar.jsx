import React, { Component } from 'react'
import Api from '../../services/api'
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
  }

  loadCharHandler = char => {
    this.setState({ char })
  }

  updateChar() {
    const id = Math.floor(Math.random() * 1200)

    this.api
      .getCharacter(id)
      .then(this.loadCharHandler)
      .catch(err => console.error(err))
      .finally(console.log(id))
  }

  render() {
    const { name, gender, born, died, culture } = this.state.char

    return (
      <div className="random-block rounded">
        <h4 className="random-block-title">Random Character: {name}</h4>
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
