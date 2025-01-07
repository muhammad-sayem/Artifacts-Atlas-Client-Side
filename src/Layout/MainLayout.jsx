import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet className="w-10/12 mx-auto"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;