
import Link from "next/link"
import { Stack } from "@chakra-ui/layout";



const Footer = (props) => {
    return (
        <>

            <Stack direction={['column', 'row']}
                spacing='24px'
                alignItems="end">

                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="#">
                    <a>About</a>
                </Link>
                <Link href="#">
                    <a>Contact Us</a>
                </Link>
                <Link href="#">
                    <a>© 2021</a>
                </Link>
            </Stack>

        </>
    );
};

export default Footer;