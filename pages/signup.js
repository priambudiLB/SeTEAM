import styles from '../styles/signup.module.css'
import { useState,useRef } from "react";
import Image from 'next/image'
import {FormControl,FormLabel,GridItem,Input,Grid,
  FormHelperText,Button,Heading,Center} from "@chakra-ui/react"
import firebase from '../config/firebase'


export default function SignUp() {
  const [error, setError] = useState("");
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confPassRef = useRef()
  const firebaseAuth = firebase.auth()
  
  async function handleSubmit(){
    
    if (passwordRef.current.value!==confPassRef.current.value){
        return setError("Invalid Credential")
    }
    firebaseAuth
    .createUserWithEmailAndPassword(
        emailRef.current.value,passwordRef.current.value)
        .then((res)=>{
            firebaseAuth.currentUser
            .sendEmailVerification()
            .then(()=>{
                <Alert status="success">
                <AlertIcon />
                Data uploaded to the server. Fire on!
              </Alert>
              push('./login')

            })
        })
  }
  return (
         <form className={styles.container}>
   <Grid h="400px" templateRows="repeat(1, 1fr)"templateColumns="repeat(4, 1fr)"
    gap={0} id='grid'>
      
    <GridItem rowSpan={1} colSpan={2} bg="darkgrey" w="700px" >
    <Image src='/pic.jpg' className='img-box' width={700} height={450}/>
    </GridItem>
    <GridItem colSpan={2} bg="gainsboro">
    
        <Heading className={styles.textSignUp}>Sign Up</Heading>
        {error && <Alert variant="danger">{error}</Alert>}

            <FormControl id="fullname"  >
            <FormLabel padding="3px"><Center>Username</Center></FormLabel>
            <Input type="text"placeholder='Username' ref={usernameRef}  w="250px" isRequired/>
            </FormControl> 

            <FormControl id="email" >
            <FormLabel  padding="3px" ><Center>Email address</Center></FormLabel>
            <Input type="email" placeholder='Email@email.com' ref={emailRef} w="250px" isRequired />
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password" >
            <FormLabel   padding="3px"><Center>Passwords</Center></FormLabel>
            <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired  />
            </FormControl>

            <FormControl id="confirmPass"  >
            <FormLabel  padding="3px"><Center>Confirm Password</Center></FormLabel>
            <Input type="password" placeholder='Confirm your password' ref={confPassRef} w="250px" isRequired />
            </FormControl>

            <Button colorScheme="teal" mr="4" h="30px" w="70px"  padding="5px">
              Sign Up
            </Button>
    </GridItem>
  </Grid>
         </form>
         
    )}