import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar"

const Root = () => {

    return (
        <>
            <NavBar />
            <Outlet />
            <FooterBar />
        </>
    );
};

export default Root;
