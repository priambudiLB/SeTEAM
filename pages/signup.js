import styles from '../styles/signup.module.css'
import { useState,useRef } from "react";
import {useHistory} from 'react-router-dom'
import Image from 'next/image'
import {FormControl,FormLabel,GridItem,Input,Grid,
  FormHelperText,Button,Heading,Center,Alert} from "@chakra-ui/react"
import firestore from "../config/firebase";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
// const firebaseAuthentication = firebase.auth();

// firebase.initializeApp(firebaseClient,firebaseAuthentication)

export default function SignUp() {
  const [error, setError] = useState("");
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confPassRef = useRef()
  // const history = useHistory();
  

  async function handleSubmit(e){
    e.preventDefault()
    if (passwordRef.current.value!==confPassRef.current.value){
        return setError("Invalid Credential")
    }
     firestore.auth().createUserWithEmailAndPassword(
        emailRef.current.value,passwordRef.current.value)
        .then((res)=>{
          firestore.currentUser
            .sendEmailVerification()
            .then(() => {
              alert("Please Kindly Check Your Email");
              history.push("/signin");
            })
            .catch((error) => {
              setError("Login Failed Check your Credential");
            });
        })
        .catch((err) => {
          alert(err.message);
        
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
            <Input type="text"
            placeholder='Username' 
            ref={usernameRef}  
            w="250px" 
            isRequired/>
            </FormControl> 

            <FormControl id="email" >
            <FormLabel  padding="3px" ><Center>Email address</Center></FormLabel>
            <Input type="email" 
            placeholder='Email@email.com' 
            ref={emailRef} 
            w="250px" 
            isRequired />
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password" >
            <FormLabel   padding="3px"><Center>Passwords</Center></FormLabel>
            <Input type="password" 
            placeholder='Password' 
            ref={passwordRef}
            w="250px" 
            isRequired  />
            </FormControl>

            <FormControl id="confirmPass"  >
            <FormLabel  padding="3px"><Center>Confirm Password</Center></FormLabel>
            <Input type="password" 
            placeholder='Confirm your password' 
            ref={confPassRef} 
            w="250px" 
            isRequired />
            </FormControl>

            <Button colorScheme="teal" mr="4" h="30px" w="70px" onClick={handleSubmit}  padding="5px">
              Sign Up
            </Button>
    </GridItem>
  </Grid>
         </form>
         
    )}