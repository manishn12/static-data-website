import React from 'react';
import './Navbar.css';
import Logo from '../logo.png';


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src= {Logo} alt = "City-Tour-Logo" />
                <ul className="nav-links">
                    <li>
                      <a href="/" className="nav-link">  Home </a>
                    </li>
                    <li >
                    <a href="/about" className="nav-link">
                     About</a>
                    </li>
                    <li >
                    <a href="/" className="nav-link active">Tours</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
