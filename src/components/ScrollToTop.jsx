import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 }); // behavior: 'smooth'

        const $cursor = document.querySelector(`.cursor`);
        const $links = document.querySelectorAll(`.hover__link`);
        
        const handleEnterLink = () => $cursor.classList.add(`hover`);
        const handleLeaveLink = () => $cursor.classList.remove(`hover`);
        
        $cursor.classList.remove(`hover`);
        $links.forEach($link => $link.addEventListener(`mouseenter`, handleEnterLink));
        $links.forEach($link => $link.addEventListener(`mouseleave`, handleLeaveLink));
    }, [location]);

    return <>
        {props.children}
    </>
};

ScrollToTop.propTypes = {
    children: PropTypes.node,
};

export default ScrollToTop;