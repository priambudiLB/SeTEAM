import { Fragment } from "react";
<<<<<<< HEAD
import NavbarHome from "../navbarhome";
=======
>>>>>>> 970db7f98d6d8ff7182672b06a31e45cf73230b3
import Footer from "../footer";

const Layout = (props) => {
    return (
        <Fragment>
            <main> {props.children}</main>
            <Footer />
        </Fragment>
    )
}
export default Layout;