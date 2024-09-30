import { Outlet } from "react-router-dom";
import { ReactLenis } from 'lenis/react';
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar"
import Cursor from "../components/Cursor";

const Root = () => {
    return (
        <ReactLenis root>
            <ScrollToTop>
                <Cursor />
                <NavBar />
                <Outlet />
                <FooterBar />
            </ScrollToTop>
        </ReactLenis>
    );
};

export default Root;
