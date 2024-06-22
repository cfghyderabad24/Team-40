import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">Next Skills 360</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mainNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/support">Support</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pages">Pages</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar