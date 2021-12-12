import { Button } from "@chakra-ui/react";

import firebase from "../../config/firebase";
const firebaseAuth = firebase.auth();


const SignOutUser = () => {


    const HandleSignOut = () => {
        // signout from firebase 
        // delete data on storage
        if (firebaseAuth.currentUser) {
            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                alert("You have signed out")
                window.location.reload();
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });
        }

    }
    return (
        <Button
            as={Button} rounded={"full"} variant={"solid"}
            cursor={"pointer"} minW={0} spacing={3} right={2}
            onClick={HandleSignOut}>Sign Out</Button>
    )
}

export default SignOutUser;