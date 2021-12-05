import { Fragment } from "react";
import NavbarHome from "../navbarhome";
const Layout = (props) => {
    return (
        <Fragment>
            <NavbarHome />
            <main> {props.children}</main>
        </Fragment>
    )
}
export default Layout;