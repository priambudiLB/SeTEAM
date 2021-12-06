import styles from '../styles/signin.module.css'
<<<<<<< HEAD
import { useState, useRef } from "react";
import Image from 'next/image'

import { FormControl, FormLabel, GridItem, Input, Grid, Center, Alert, FormHelperText, Button, Heading, Flex} from "@chakra-ui/react";


import firebase from '../config/firebase';
import { useRouter } from 'next/router';
const firebaseAuthentication = firebase.auth();

=======
import { useState,useRef } from "react";
import {FormControl,FormLabel,WrapItem,Input,Wrap,
  Center,Alert,FormHelperText,Button,Image,Container,Text } from "@chakra-ui/react";
import firebase from '../config/firebase';
import {useRouter} from 'next/router';
const firebaseAuthentication = firebase.auth();  
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
export default function Signin() {
  const [error, setError] = useState("");
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()
<<<<<<< HEAD

  async function handleSubmit(e) {
=======
  async function addData(e){
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
    e.preventDefault();
    var errorCode = error.code;
    if (errorCode === "auth/worng-password") {
      return setError("Login Failed");
    } else {
      await firebaseAuthentication.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      alert("SuccessFully Login");
      localStorage.setItem("username", emailRef.current.value);
      router.push("/dashboard")
    }
  }
<<<<<<< HEAD

  return (
    <Flex mb={"15%"}>
      <form className={styles.container}>
        <Grid h="400px" templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)"
          gap={0} id='grid'>

          <GridItem rowSpan={1} colSpan={2} bg="darkgrey" w="700px" >
            <Image src='/pic.jpg' alt='frontimage' className='img-box' width={700} height={450} />
          </GridItem>
          <GridItem colSpan={2} bg="gainsboro">

            <Heading className={styles.textSignUp}>Sign In</Heading>
            {error && <Alert variant="danger">{error}</Alert>}


            <FormControl id="email" className={styles.content} >
              <FormLabel padding="3px" ><Center>Email address</Center></FormLabel>
              <Input type="email" placeholder='Email@email.com' ref={emailRef} w="250px" isRequired />
              <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password" className={styles.content} >
              <FormLabel padding="3px"><Center>Passwords</Center></FormLabel>
              <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired />
            </FormControl>

            <Button colorScheme="teal" mr="4" h="30px" w="70px" className={styles.btn} onClick={handleSubmit}>
              Sign In
            </Button>


          </GridItem>

        </Grid>

      </form>
    </Flex>


  )
}
=======
  return (
    <div className={styles.container}>
        <Wrap spacing='3px' >
        <WrapItem>
          <Center w='900px' h='550px' bg='green.100'>
        <Image src='/pic.jpg' alt='webdev' w='900px' h='550px' />
          </Center>
           <Container  pt={5} w='300px' h='550px' bg='gainsboro'>
            <form onSubmit={(e) => {
            userDBRef.on('child_added', addData)
           }}> 
           {error && <Alert variant="danger">{error}</Alert>}
           <Text pt={50} fontWeight='bold' fontSize='20px'  >Please Sign In Here!</Text>
            <FormControl pt={15} id="email" className={styles.content} >
            <FormLabel  padding="1px" ><Center>Email address</Center></FormLabel>
            <Input type="email" placeholder='Enter your Email here' ref={emailRef} w="250px" isRequired/>
            <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>
            <FormControl  pt={10} id="email" className={styles.content} >
            <FormLabel  padding="3px" ><Center>Password</Center></FormLabel>
            <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired/>
            </FormControl>
            <Button mt={5} colorScheme="teal" mr="4" h="30px" w="70px"  className={styles.btn} >
              Sign Up
            </Button>
          </form>
          </Container>
        </WrapItem>
        </Wrap>
        </div>
    )}
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
