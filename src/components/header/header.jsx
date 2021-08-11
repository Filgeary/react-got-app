import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__block">
        <h1 className="header__title">
          <Link to="/">Game of Thrones DB</Link>
        </h1>

        <ul className="header__list">
          <li>
            <NavLink to="/characters" activeClassName="header__link--selected">
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/houses" activeClassName="header__link--selected">
              Houses
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" activeClassName="header__link--selected">
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
