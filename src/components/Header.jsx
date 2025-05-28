import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

import './Header.css'
const Header = () => {


  // Function to open and close the menu
  const openMenu = () => {
    const menu = document.getElementById('menu');
    menu.style.right = "0px";
  }
  const closeMenu = () => {
    const menu = document.getElementById('menu');
    menu.style.right = "-100%";
  }


  
  return (
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="#">Portfo<span>lio</span></a></div>
            <ul className="menu" id="menu">
                <li><a href="#home" className="menu-btn" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#skills" className="menu-btn" onClick={closeMenu}>Skills</a></li>
                <li><a href="#works" className="menu-btn" onClick={closeMenu}>Works</a></li>
                <li><a href="#contact" className="menu-btn" onClick={closeMenu}>Contact</a></li>
                <div className="cross" onClick={closeMenu}>
                    <RxCross1 />
                </div>
            </ul>
            <div className="menu-btn" onClick={openMenu}>
                <HiMenuAlt2 />
            </div>
        </div>
    </nav>
  )
}

export default Header
