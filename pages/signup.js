import styles from '../styles/signup.module.css'
import { useState, useRef } from "react";
import { useRouter } from 'next/router'
import {
  FormControl, FormLabel, WrapItem, Input, Wrap,
  FormHelperText, Button, Text, Center, Alert,Container,Image
} from "@chakra-ui/react"
import firebase from '../config/firebase';
import getStudentReg from './api/student';



const firebaseAuthentication = firebase.auth();


export default function SignUp() {
  const [error, setError] = useState("");
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirm,setConfirm] = useState()
  const router = useRouter()


  var db = firebase.database()
  var userDBRef = db.ref('userData')
  async function addData(e){
      //   await userDBRef.push({
      //     username: username.current,
      //     password: password.current,
      //     email: password.current
      //   })
      //  console.log('This Data was Uploaded to Database')

      e.preventDefault()
      if (password!==confirm){
            return setError("Invalid Credential")
        }
       
          if (!username || !email || !password  ){
            return setErrors( 'Please fill all fields ')
        }
        if (setPassword < 6 ){
          return setErrors( 'Your Password less than 6 letter')
        } 
        try {
          const body = {username,email,password}
           const response = await fetch('http://localhost/5000/server/index',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
          })
          console.log(response)
          try{
            alert('Sign Up Success, Please Login')
            router.push("/signin")
          } catch(err){
            console.error(err.message)
          }
        }catch(err){
          console.error(err.message)
        }
      }
      // await firebaseAuthentication.createUserWithEmailAndPassword(
      // emailRef.current.value,passwordRef.current.value)
      //       .then((res)=>{
      //   firebaseAuthentication.currentUser
      //     .sendEmailVerification()
          // .then(() => {
          //   alert("Please Kindly Check Your Email")
          //   router.push('/signin')

          // })

        //     })
        //     console.log(response)
        //     try{
        //       alert('Sign Up Success, Please Login')
        //       router.push("/signin")
        //     } catch(err){
        //       console.error(err.message)
        //     }
        // //     .catch((err) => {
        // alert(err.message);
            
        //     })
      
  //  }


      return (
        <div className={styles.container}>
        <Wrap spacing='3px' >
        <WrapItem>
          <Center w='900px' h='550px' bg='green.100'>
        <Image src='/pic.jpg' alt='stdn' w='900px' h='550px' />
          </Center>

    
           <Container  pt={5} w='300px' h='550px' bg='gainsboro'>
            <form onSubmit={(e) => {
            userDBRef.on('child_added', addData)
           }}>
            
           {error && <Alert variant="danger">{error}</Alert>
           }
           <Text fontWeight='bold' fontSize='20px'  >Please Sign Up first!</Text>
            <FormControl pt={2} id="username" className={styles.content} >
            <FormLabel  padding="3px" ><Center>Full Name</Center></FormLabel>
            <Input type="text" placeholder='Daniel Costa' value={username} w="250px" onChange={e=>setUsername(e.target.value)}
            isRequired/>
            </FormControl>

            <FormControl pt={2} id="email" className={styles.content} >
            <FormLabel  padding="1px" ><Center>Email address</Center></FormLabel>
            <Input type="email" placeholder='Enter your Email here' value={email} w="250px" onChange={e=>setEmail(e.target.value)} isRequired/>
            <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>

            <FormControl  pt={2} id="email" className={styles.content} >
            <FormLabel  padding="3px" ><Center>Password</Center></FormLabel>
            <Input type="password" placeholder='Password' value={password} w="250px" onChange={e=>setPassword(e.target.value)} isRequired/>
            </FormControl>

            <FormControl  pt={2} id="email" className={styles.content} >
            <FormLabel  padding="3px" ><Center>Confirm Password</Center></FormLabel>
            <Input type="password" placeholder='Confirm your Password' value={confirm} w="250px" onChange={e=>setConfirm(e.target.value)} isRequired/>
            </FormControl>

            <Button mt={5} colorScheme="teal" mr="4" h="30px" w="70px"  className={styles.btn} >
              Sign Up
            </Button>
          </form>
          </Container>
        </WrapItem>
        </Wrap>
        </div>

         
    )
}