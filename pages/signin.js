import styles from '../styles/signin.module.css'
import { useState,useRef } from "react";
import Image from 'next/image'
import {FormControl,FormLabel,GridItem,Input,Grid,
  FormHelperText,Button,Heading,Center} from "@chakra-ui/react"

export default function Signin() {
  const [error, setError] = useState("");
  const emailRef = useRef()
  const passwordRef = useRef()

  
  return (
         <form className={styles.container}>
   <Grid h="400px" templateRows="repeat(1, 1fr)"templateColumns="repeat(4, 1fr)"
    gap={0} id='grid'>
      
    <GridItem rowSpan={1} colSpan={2} bg="darkgrey" w="700px" >
    <Image src='/pic.jpg' className='img-box' width={700} height={450}/>
    </GridItem>
    <GridItem colSpan={2} bg="gainsboro">
    
        <Heading className={styles.textSignUp}>Sign In</Heading>
        {error && <Alert variant="danger">{error}</Alert>}


            <FormControl id="email" className={styles.content} >
            <FormLabel  padding="3px" ><Center>Email address</Center></FormLabel>
            <Input type="email" placeholder='Email@email.com' ref={emailRef} w="250px" isRequired/>
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password" className={styles.content} >
            <FormLabel   padding="3px"><Center>Passwords</Center></FormLabel>
            <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired />
            </FormControl>

            <Button colorScheme="teal" mr="4" h="30px" w="70px"  className={styles.btn}>
              Sign In
            </Button>
    
            
    </GridItem>
   
  </Grid>
  
  </form>
         
    )}