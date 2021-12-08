
/*
    read documentation here
    --> https://firebase.google.com/docs/database/admin/retrieve-data#node.js

*/
import { Button } from "@chakra-ui/button"


import firebase from "../../config/firebase";
const user = firebase.auth();
export const ReadDataFromRDB = () => {

    const readDate = () => {
        try {


            // if (user !== null) {
            // user.providerData.forEach((profile) => {
            //     console.log("Sign-in provider: " + profile.providerId);
            //     console.log("  Provider-specific UID: " + profile.uid);
            //     console.log("  Email: " + profile.email);
            //     console.log("  username: " + profile.username);
            // });
            // const [...data] = user.providerData
            // console.log(user.uid);


            // }

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    var uid = user.uid;
                    console.log(uid)
                    // ...
                } else {
                    // User is signed out
                    // ...
                }
            });

            // const dbRef = firebase.database().ref("instructorData");
            // dbRef.once("value", (snapshot) => {
            //     console.log(snapshot.val())
            // })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <Button onClick={readDate}> Read data RDB</Button>
    )
}