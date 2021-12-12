
import {
    Container,
    Flex,
    VStack,
    FormControl, FormLabel, Input, Image,
    FormHelperText, Button, Center, Alert, Wrap, WrapItem, Box, Text

} from "@chakra-ui/react"


const UploadVideoClD = () => {


    return (

        <Flex>


            <Container maxW='container.md'>Medium Container</Container>
            <Flex>
                {/* upoad data */}
                {/* <Text fontWeight='bold' fontSize='20px'  >Upload Data Video</Text>
                <FormControl pt={2} id="email" className >
                    <FormLabel padding="1px" ><Center>Email address</Center></FormLabel>
                    <Input type="video_address" placeholder='Upload Video' ref w="250px" isRequired />
                    <FormHelperText>We will never share your email.</FormHelperText>
                </FormControl>

                <Button onClick mt={5} colorScheme="teal" mr="4" h="30px" w="70px" className={"#"} >
                    Upload Video
                </Button> */}
            </Flex>
        </Flex>
    )

}

export default UploadVideoClD;