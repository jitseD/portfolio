import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cursorHover } from "../utils/cursorHover";


const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 }); // behavior: 'smooth'

        const $cursor = document.querySelector(`.cursor`);
        $cursor.classList.remove(`hover--arrow`, `hover--back`, `hover--send`, `hover--external`, `hover--circle`);
        cursorHover(`arrow`);
        cursorHover(`back`);
        cursorHover(`send`);
        cursorHover(`external`);
        cursorHover(`circle`);
    }, [location]);

    return <>
        {props.children}
    </>
};

ScrollToTop.propTypes = {
    children: PropTypes.node,
};

export default ScrollToTop;