import React from 'react'
import './notFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page__desc-wrap">
        <p className="not-found-page__desc">Are You Lost?</p>
      </div>

      <Link
        to="/"
        className="not-found-page__control--home btn btn-secondary btn-lg"
        title="Go to Home Screen"
      >
        Yes, my Queen !
      </Link>
    </section>
  )
}

export default NotFoundPage
