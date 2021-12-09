
/*
    read documentation here
    --> https://firebase.google.com/docs/database/admin/retrieve-data#node.js

*/
import { Button } from "@chakra-ui/button"


import firebase from "../../config/firebase";
const user = firebase.auth();
export const ReadDataFromRDB = () => {

    const readDate = async () => {
        try {

            if (user) {
                const db = firebase.database();
                const ref =  db.ref("instructorData");
                ref.on("value", getData, errData)
                function getData(obj) {
                    console.log(Object.keys(obj.val()))
                }
                function errData(error) {
                    console.log(error)
                }

                getData(obj)
            }

        
            // }
            // check if user auth as teacher
            /*
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    var uid = user.uid;
                    // console.log("test: " , user)
                    const {...data} = user;
                    console.log("data: ", data)
                    console.log("meta data: ", data.metadata)
                    console.log("uid: ", data.uid)
                } else {
                    // User is signed out
                    // ...
                }
            });
            */

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