
/*
    read documentation here
    --> https://firebase.google.com/docs/database/admin/retrieve-data#node.js

*/
import { Button } from "@chakra-ui/button"


import firebase from "../../config/firebase";

const user = firebase.auth();

export const ReadDataFromRDB = () => {

    const readData = () => {
        try {

            user.onAuthStateChanged((signedUser) => {
                if (signedUser) {
                    const db = firebase.database();
                    const ref = db.ref('instructorData')
    
                    // Attach an asynchronous callback to read the data at our posts reference
                    ref.on('value', (snapshot) => {
                        // console.log(snapshot.val()); --> get all data
                        const uidCurrUser = signedUser.uid
                        console.log("unique ID: ", uidCurrUser)
                    }, (errorObject) => {
                        console.log('The read failed: ' + errorObject.name);
                    });
                } else {
                    console.log("nothing")
                }
               
            })

        } catch (error) {
        console.log(error)
        alert(error)
    }
}

return (
    <Button onClick={readData}> Read data RDB</Button>
)
}