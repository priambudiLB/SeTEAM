import React, { useEffect } from "react";
import firebase from "../config/firebase";
import { Document, Page } from 'react-pdf';
import Navbar from "../components/navbardashboard.js";
import Sidebar from "../components/sidebardashboard.js";
import { Text, FormControl, FormLabel, Switch, Container } from "@chakra-ui/react";


const db = firebase.firestore();

const AddCourses = () => {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log(file.type);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const coursename = e.target.coursename.value;
    const coursedesc = e.target.coursedesc.value;
    const coursetype = e.target.coursetype.value;
    if (!coursename || !fileUrl) {
      return;
    }
    await db.collection("users").doc(coursename).set({
      coursename: coursename,
      coursedesc: coursedesc,
      avatar: fileUrl,
      coursetype: coursetype,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();

      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        }),
      );
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <title>Add Courses Page</title>

      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Container mt="-230px" ml="200px">
        <Text mb='8px'>Courses Name</Text>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            size='sm'
            width='300px'
            background='white'
            color='black'
            name="coursename"
          />
          <Text mb='8px' mt="20px">Description</Text>
          <input
            size='sm'
            width='300px'
            background='white'
            color='black'
            name="coursedesc"
          />
          <FormControl display='flex' alignItems='center' mt="20px">
            <Switch size="lg" />
            <FormLabel ml="10px">
              Free?
            </FormLabel>
          </FormControl>

          <Text mb='8px' mt="20px">File type</Text>
          <input type="text" list="data" name="coursetype" />
          <datalist id="data">
            <option value="video/mp4" />
            <option value="image/jpeg" />
            <option value="application/pdf" />
          </datalist>

          <br />
          <input type="file" onChange={onFileChange} />
          <br />
          <button> Submit </button>
          <br />
          <br />

        </form>
        <ul>
          {users.map((user) => {
            if (user.coursetype == "video/mp4") {
              return (
                <li key={user.coursename}>
                  <video width="320" height="240" controls>
                    <source src={user.avatar} type="video/mp4" />
                  </video>
                  <p>{user.coursename}</p>
                </li>
              );
            } else if (user.coursetype == "image/jpeg") {
              return (
                <li key={user.coursename}>
                  <img width="320" height="240" src={user.avatar} alt={user.coursename} />
                  <p>{user.coursename}</p>
                </li>
              );
            } else if (user.coursetype == "application/pdf") {
              return (
                <li key={user.coursename}>
                  <Document width="320" height="240" file={user.avatar} alt={user.coursename}>
                    <Page pageNumber={1} />
                  </Document>
                  <p>{user.coursename}</p>
                </li>
              );
            } else {
              return;
            }
          })}
        </ul>
      </Container>
    </div>
  );
};

export default AddCourses;