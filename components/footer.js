
import Link from 'next/link';
import { Stack, Center } from '@chakra-ui/layout';



const Footer = (props) => {
<<<<<<< HEAD
    return (
        <>
            <Center>


                <Stack direction={'row'}
                    justifyContent={"space-evenly"}
                    spacing={"60px"}
                    id="footer"
                    marginBottom={"10px"}>

                    <Link href="/" onClick={() => {window.location.reload()}}>
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
            </Center>

        </>
    );
=======
  return (
    <>
      <Center>


        <Stack direction={'row'}
          justifyContent={'space-evenly'}
          spacing={'60px'}
          id="footer"
          marginBottom={'10px'}>

          <Link href="/" onClick={() => {window.location.reload();}}>
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
      </Center>

    </>
  );
>>>>>>> 7730ccf16bc781fa12463d6ca762eb883c9797b2
};

export default Footer;