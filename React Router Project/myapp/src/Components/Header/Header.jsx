import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (
    <div>
       <header className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="logo-link">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="logo-img"
                            alt="Logo"
                        />
                    </Link>
                    <div className="auth-buttons">
                        <Link to="#" className="login-btn">
                            Log in
                        </Link>
                        <Link to="#" className="signup-btn">
                            Get started
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className="nav-list">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
