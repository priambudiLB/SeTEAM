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
import Image from 'next/image'
import {FormControl,FormLabel,GridItem,Input,Grid } from "@chakra-ui"

import firebase from '../config/firebase';
import {useRouter} from 'next/router';
const firebaseAuthentication = firebase.auth();  
>>>>>>> 7445a26659d5a633887c8ab11a831618b844af92

export default function Signin() {
  const [error, setError] = useState("");
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()

<<<<<<< HEAD
  async function handleSubmit(e) {
=======
  async function handleSubmit(e){
>>>>>>> 7445a26659d5a633887c8ab11a831618b844af92
    e.preventDefault();
    var errorCode = error.code;

    if (errorCode === "auth/worng-password") {
      return setError("Login Failed");
<<<<<<< HEAD

=======
      
>>>>>>> 7445a26659d5a633887c8ab11a831618b844af92
    } else {
      await firebaseAuthentication.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      alert("SuccessFully Login");
      localStorage.setItem("username", emailRef.current.value);
<<<<<<< HEAD
      router.push("/dashboard");
    }
  }

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
      router.push("/homepage");
    }
  }
  
  return (
         <form className={styles.container}>
   <Grid h="400px" templateRows="repeat(1, 1fr)"templateColumns="repeat(4, 1fr)"
    gap={0} id='grid'>
      
    <GridItem rowSpan={1} colSpan={2} bg="darkgrey" w="700px" >
    <Image src='/pic.jpg' alt='frontimage' className='img-box' width={700} height={450}/>
    </GridItem>
    <GridItem colSpan={2} bg="gainsboro">
    
        <Heading className={styles.textSignUp}>Sign In</Heading>
        {error && <Alert variant="danger">{error}</Alert>}


            <FormControl id="email" className={styles.content} >
            <FormLabel  padding="3px" ><Center>Email address</Center></FormLabel>
            <Input type="email" placeholder='Email@email.com' ref={emailRef} w="250px" isRequired/>
            <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password" className={styles.content} >
            <FormLabel   padding="3px"><Center>Passwords</Center></FormLabel>
            <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired />
            </FormControl>

            <Button colorScheme="teal" mr="4" h="30px" w="70px"  className={styles.btn} onClick={handleSubmit}>
              Sign In
            </Button>
    
            
    </GridItem>
   
  </Grid>
  
  </form>
         
    )}
>>>>>>> 7445a26659d5a633887c8ab11a831618b844af92
