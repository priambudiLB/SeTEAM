import { Fragment } from "react";
import NavbarHome from "../navbarhome";
import Footer from "../footer";

const Layout = (props) => {
    return (
        <Fragment>
            <NavbarHome />
            <main> {props.children}</main>
            <Footer />
        </Fragment>
    )
}
export default Layout;