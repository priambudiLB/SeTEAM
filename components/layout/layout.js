import { Fragment } from "react";
import NavbarHome from "../navbarhome";
<<<<<<< HEAD
import Footer from "../footer";

=======
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
const Layout = (props) => {
    return (
        <Fragment>
            <NavbarHome />
            <main> {props.children}</main>
<<<<<<< HEAD
            <Footer />
=======
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
        </Fragment>
    )
}
export default Layout;