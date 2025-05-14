import React from 'react'
import './Footer.css'
import { Link,NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
       <footer className="custom-footer">
            <div className="custom-container">
                <div className="custom-flex custom-justify-between">
                    <div className="custom-margin-bottom">
                        <Link to="/" className="custom-logo">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="custom-logo-img"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="custom-grid">
                        <div>
                            <h2 className="custom-heading">Resources</h2>
                            <ul className="custom-list">
                                <li className="custom-list-item">
                                    <Link to="/" className="custom-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="custom-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="custom-heading">Follow us</h2>
                            <ul className="custom-list">
                                <li className="custom-list-item">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="custom-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="custom-link">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="custom-heading">Legal</h2>
                            <ul className="custom-list">
                                <li className="custom-list-item">
                                    <Link to="#" className="custom-link">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="custom-link">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="custom-divider" />
                <div className="custom-flex custom-items-center custom-justify-between">
                    <span className="custom-text-small">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="custom-hover-link">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="custom-flex custom-space-x">
                        <Link to="#" className="custom-social-link">
                            <svg className="custom-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        {/* Add other social links in the same way */}
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
