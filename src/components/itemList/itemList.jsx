import React, { Component } from 'react'
import './itemList.css'

export default class ItemList extends Component {
  render() {
    return (
      <>
        <h3 className="item-list-title">Pick a Hero</h3>
        <ul className="item-list list-group">
          <li className="list-group-item" tabIndex="0">
            John Snow
          </li>
          <li className="list-group-item" tabIndex="0">
            Brandon Stark
          </li>
          <li className="list-group-item" tabIndex="0">
            Geremy
          </li>
        </ul>
      </>
    )
  }
}
