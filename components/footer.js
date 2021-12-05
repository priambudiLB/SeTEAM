
import Link from "next"
import { Stack } from "@chakra-ui/layout";



const Footer = () => {
    return (
        <>

            <Stack direction={['column', 'row']} 
                    spacing='24px'
                    alignItems="end">
                    <div>
                        Home
                    </div>
                    <div>About</div>
                    <div>Contact Us</div>
                    <div className="#">© 2021</div>
                </Stack>

        </>
    );
};

export default Footer;