import {
    Box,Flex,HStack,Button,Menu,
    useDisclosure,useColorModeValue,useColorMode,Stack,Image,Text
  } from "@chakra-ui/react";
 
  import {MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
  
  export default function Navvbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter()

    return (
      <>
        <Box bg={useColorModeValue("red.300", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
       
            <HStack spacing={8} alignItems={"center"}>
              <Image src='/book.png' alt='bookLogo' borderRadius='full' boxSize='50px' />
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
               
                  <Text fontSize='20px'>Welcome to</Text>
                  <Text fontSize='30px' fontWeight='bold'>Sinau.id</Text>
                 
                ))
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
              <Button
                  as={Button} rounded={"full"} variant={"solid"}
                  cursor={"pointer"} minW={0} right={40}
                  onClick={()=>{
                    router.push('/signin')
                  }}
                >
                SignIn 
                </Button>
                <Button
                  as={Button} rounded={"full"} variant={"solid"}
                  cursor={"pointer"} minW={0} spacing={3} right={5}
                  onClick={()=>{
                    router.push('/signup')
                  }}
                >
                SignUp 
                </Button>
               
              </Menu>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }