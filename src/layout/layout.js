import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import Favourites from "./favourite/favourite";

/**
 * the header component of whole application
 * @returns header element
 */
const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
        <Favourites />
    </>
);
export default Layout;