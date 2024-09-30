import { useState } from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";

const NavBar = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen);
    const closeMobileNav = () => setMobileNavOpen(false);

    return (
        <header>
            <nav className="nav">
                <ul className="nav__desktop">
                    <li className="hover--nav"><NavLink className="nav__link" to={import.meta.env.BASE_URL}>home</NavLink></li>
                    <li className="hover--nav"><NavLink className="nav__link" to={`${import.meta.env.BASE_URL}projects`}>projects</NavLink></li>
                    <li className="hover--nav"><NavLink className="nav__link" to={`${import.meta.env.BASE_URL}about`}>about</NavLink></li>
                </ul>

                <div className={`nav__hamburger ${isMobileNavOpen && `open`}`} onClick={toggleMobileNav}>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </div>

                <div className={`mobile__wrapper ${isMobileNavOpen && `open`}`}>
                    <ul className="nav__mobile">
                        <li><NavLink className="nav__link" to={import.meta.env.BASE_URL} onClick={closeMobileNav}>home</NavLink></li>
                        <li><NavLink className="nav__link" to={`${import.meta.env.BASE_URL}projects`} onClick={closeMobileNav}>projects</NavLink></li>
                        <li><NavLink className="nav__link" to={`${import.meta.env.BASE_URL}about`} onClick={closeMobileNav}>about</NavLink></li>
                    </ul>
                    <div className="nav__divider" />
                    <Socials />
                </div>

                <div className={`nav__overlay ${isMobileNavOpen && `open`}`} onClick={closeMobileNav} />
            </nav>
        </header>
    )
};

export default NavBar;