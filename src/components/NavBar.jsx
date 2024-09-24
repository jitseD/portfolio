import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="nav__bar">
                <NavLink to={`${import.meta.env.BASE_URL}`} className="nav__link">home</NavLink>
                <NavLink to={`${import.meta.env.BASE_URL}projects`} className="nav__link">projects</NavLink>
                <NavLink to={`${import.meta.env.BASE_URL}about`} className="nav__link">about</NavLink>
                <NavLink to={`${import.meta.env.BASE_URL}contact`} className="nav__link">contact</NavLink>
            </nav>
        </header>
    )
};

export default NavBar;