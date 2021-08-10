import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 12px;
`

const HeaderTitle = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
`

const HeaderLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  align-items: center;
  color: #fff;
  list-style-type: none;
  li {
    font-size: 18px;
  }
  a {
    padding: 8px 12px;
  }
`

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        <Link to="/">Game of Thrones DB</Link>
      </HeaderTitle>
      <HeaderLinks>
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
      </HeaderLinks>
    </HeaderBlock>
  )
}

export default Header
