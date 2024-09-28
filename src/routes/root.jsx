import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar"
import Cursor from "../components/Cursor";

const Root = () => {
    return (
        <>
            <ScrollToTop>
                <Cursor />
                <NavBar />
                <Outlet />
                <FooterBar />
            </ScrollToTop>
        </>
    );
};

export default Root;
