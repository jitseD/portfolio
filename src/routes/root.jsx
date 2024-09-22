import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {

    return (
        <>
            <header>ROOT</header>
            <Nav />
            <Outlet />
        </>
    );
};

export default Root;
