import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;