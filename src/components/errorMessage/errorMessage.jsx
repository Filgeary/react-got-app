import React from 'react'
import './errorMessage.css'

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <p className="error-message-text">
        Oops! Something Wrong! <br />
        Please, try again later.
      </p>
    </div>
  )
}

export default ErrorMessage
