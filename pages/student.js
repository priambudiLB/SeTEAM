import React from "react";
import Navbar from "../components/navbardashboard";
import Footer from "../components/footer";
import Sidebar from "../components/sidebarstudent"

const studentPage = () => {
  return (
    <div>
      <title>Student Page</title>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
};

export default studentPage;