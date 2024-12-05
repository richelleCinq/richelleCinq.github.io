import logo from '../R_logo.png';
import '../css/Header.css'; 
import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className = "nav">
            <div>
            <Link to="/">
            <img src= {logo} alt= "Richelle's logo" className="logo" />
            </Link>
            </div>
            <nav>
            <ul>
              <li className="navItem">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="navItem">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="navItem">
                <Link to="/photography">Photography</Link>
              </li>
              <li className="navItem">
                <Link to="/typography">Typography</Link>
              </li>
              <li className="navItem">
                <Link to="/ux">UX</Link>
              </li>
              <li className="navItem">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="navItem">
                <Link to="/art">Art</Link>
              </li>
              <li className="navItem">
                <Link to="/Works">Works</Link>
              </li>
              <li className="navItem">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
};