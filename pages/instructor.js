import React from "react";
import Navbar from "../components/navbardashboard";
import Sidebar from "../components/sidebarsinstructor";
import { Button, Stack } from "@chakra-ui/react";

const instractorPage = () => {
  return (
    <div>
      <title>Instructor Page</title>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Stack align='center'>
        <Button colorScheme='white' variant='ghost' background="green" size="sm" mt="-230px" ml="-60%" width="80px" href="addcourses">
          ADD
        </Button>
      </Stack> 
    </div>
  );
};

export default instractorPage;