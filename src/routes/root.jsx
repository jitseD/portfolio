import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar"
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
    return (
        <>
            <ScrollToTop>
                <NavBar />
                <Outlet />
                <FooterBar />
            </ScrollToTop>
        </>
    );
};

export default Root;
