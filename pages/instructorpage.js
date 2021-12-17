import React, { useEffect } from "react";
import firebase from "../config/firebase";

const db = firebase.firestore();

function InstructorPage() {
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
    const filetype = e.target.type
    if (!coursename || !fileUrl) {
      return;
    }
    await db.collection("users").doc(coursename).set({
      coursename: coursename,
      avatar: fileUrl,
      desc: coursedesc,
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
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="coursename" placeholder="course name" />
        <input type="text" name="coursedesc" placeholder="desc" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              <img width="320" height="240" src={user.avatar} alt={user.name} />
              <video width="320" height="240" controls>
                <source src={user.avatar} type="video/mp4" />
              </video>
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );

};

export default InstructorPage;
