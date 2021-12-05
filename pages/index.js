<<<<<<< HEAD
import Head from 'next/head'
import { Wrap,WrapItem,Box,Center,Container,Text } from '@chakra-ui/layout'
import {Button,Image} from '@chakra-ui/react'
import styles from '../styles/Homee.module.css'
import Navvbar from '../components/navvbar'
import { useRouter } from 'next/router'



export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Navvbar/>
    <Wrap spacing="10px">
  <WrapItem>
 
    <div>
    <Container  w="600px" h="800px" bg="Beige.200">
    <br/><br/>
 <Text fontSize='70px' fontWeight='bold'>KNOWLEDGE ISNT POWER UNTIL IT IS APPLIED</Text>
 <br/><br/>
  <Button data-testid="instructor-signup" colorScheme='teal' variant='solid' right={3}
  onClick={()=>{
    router.push('/instructorsignup')
  }}>
  SignUp for Instructor
  </Button>
  <Button data-testid="instructor-signin" colorScheme='teal' variant='solid'
  onClick={()=>{
    router.push('/instructorsignin')
  }}>
  SignIn for Instructor
  </Button>
</Container>
    </div>
  </WrapItem>
  <WrapItem>
    <Center w="950px" h="800px" bg="Beige.200">
      <Image src='/devices.png' alt='devicespage' w='850px' h='500px' />
    </Center>
  </WrapItem>
  </Wrap>
  </div>
=======

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Header/>
      <h1 className={styles["title-homepage"]}> Welcome Lukman</h1>
    </>

>>>>>>> 7445a26659d5a633887c8ab11a831618b844af92
  )

}
