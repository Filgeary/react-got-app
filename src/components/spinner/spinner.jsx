import React from 'react'
import icon from './spinner.svg'
import './spinner.css'

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={icon} className="spinner-icon" alt="spinner" />
    </div>
  )
}

export default Spinner
