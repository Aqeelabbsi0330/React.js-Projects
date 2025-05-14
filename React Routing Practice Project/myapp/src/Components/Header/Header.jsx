import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header className="header">
      <div className="container">
        <h1 className="logo">CarRental</h1>
        <nav className="nav">
          <ul>
            <li><NavLink className={({isActive})=>isActive ? "active":""}to="">Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? "active":""}to="/about">About</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? "active":""}to="/contact">Contact Us</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? "active":""}to="/privacy">Privacy Policy</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? "active":""}to="/github">GitHub</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}
