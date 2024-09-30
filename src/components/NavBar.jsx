import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <NavLink to={import.meta.env.BASE_URL} className="nav__link hover--nav">home</NavLink>
                <NavLink to={`${import.meta.env.BASE_URL}projects`} className="nav__link hover--nav">projects</NavLink>
                <NavLink to={`${import.meta.env.BASE_URL}about`} className="nav__link hover--nav">about</NavLink>
            </nav>
        </header>
    )
};

export default NavBar;