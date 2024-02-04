import { useState } from 'react'
import "./Navbar.css"
import logo from "../../images/logo.svg"
import menuHamburger from "../../images/icon-hamburger.svg"
import menuClose from "../../images/icon-close.svg"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const CloseMenu = () => {
    if (openMenu) setOpenMenu(false)
  }

  return (
    <nav className={`nav ${(openMenu) ? "open-menu" : ""}`}>
        <div className="nav__container">
            <figure className="nav__figure">
                <img src={logo} alt="logo" className="nav__figure-logo" />
            </figure>

            <button type="button" className="nav__hamburger" onClick={()=> openMenu ? setOpenMenu(false) : setOpenMenu(true)}>
                { (openMenu)
                    ? <img src={menuClose} alt="Close menu"/>
                    : <img src={menuHamburger} alt="Hamburger menu"/>
                }
            </button>

            <ul className="nav__menu">
                <li className="nav__menu__li">
                    <a href="#" className="nav__menu__li-link" onClick={CloseMenu}>Product</a>
                </li>
                <li className="nav__menu__li">
                    <a href="#" className="nav__menu__li-link" onClick={CloseMenu}>Feature</a>
                </li>
                <li className="nav__menu__li">
                    <a href="#" className="nav__menu__li-link" onClick={CloseMenu}>Pricing</a>
                </li>
                <li className="nav__menu__li" onClick={CloseMenu}>
                    <button type="button" className="nav__menu__li-link nav__menu__li-link--btn" aria-label="Login">Login</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar