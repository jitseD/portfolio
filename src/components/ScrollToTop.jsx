import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { cursorHover, removerHoverClasses } from "../utils/cursorHover";
import { useLenis } from "lenis/react";

const ScrollToTop = (props) => {
    const location = useLocation();
    const lenis = useLenis();
    const prevLocation = useRef(location.pathname)

    useEffect(() => {
        const currentPath = location.pathname;
        const previousPath = prevLocation.current;

        const isCurrentProject = currentPath.includes('/projects/');
        const isPreviousProject = previousPath.includes('/projects/');

        if (isCurrentProject && isPreviousProject) {
            if (lenis)  lenis.scrollTo(0, { duration: 0 });
        } else {
            if (lenis) {
                lenis.stop();
                window.scrollTo(0, 0);
                lenis.start();
            }
        }

        prevLocation.current = currentPath;

        removerHoverClasses(``);
        cursorHover(`arrow`);
        cursorHover(`back`);
        cursorHover(`send`);
        cursorHover(`external`);
        cursorHover(`circle`);
        cursorHover(`play`);

    }, [location, lenis]);

    return <>
        {props.children}
    </>
};

ScrollToTop.propTypes = {
    children: PropTypes.node,
};

export default ScrollToTop;