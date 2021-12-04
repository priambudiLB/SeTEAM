
import Link from "next"
import { Stack } from "@chakra-ui/layout";



const Footer = () => {
    return (
        <>
            <div >
            <Stack direction={['column', 'row']} spacing='24px'>
                    <div>
                        Home
                    </div>
                    <div>About</div>
                    <div>Contact Us</div>
                    <div className="#">© 2021</div>
                </Stack>
            </div>
        </>
    );
};

export default Footer;