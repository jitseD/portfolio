import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 }); // behavior: 'smooth'
    }, [location]);

    return <>
        {props.children}
    </>
};

ScrollToTop.propTypes = {
    children: PropTypes.node,
};

export default ScrollToTop;