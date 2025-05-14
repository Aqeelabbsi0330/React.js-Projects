import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header className="header">
      <div className="container">
        <h1 className="logo">CarRental</h1>
        <nav className="nav">
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/github">GitHub</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}
