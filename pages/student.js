import React from "react";
import Navbar from "../components/navbardashboard";
import Footer from "../components/footer";
import { Button, Stack } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

const studentPage = () => {
  return (
    <div>
      <title>Student Page</title>
      <Navbar></Navbar>
      <Stack direction='column' align='start' ml="5px">
        <Button colorScheme='white' variant='ghost'>
          <ChevronRightIcon color="cyan" />
          Profile
        </Button>
        <Button colorScheme='white' variant='ghost'>
          <ChevronRightIcon color="cyan" />
          Courses Progress
        </Button>
        <Button colorScheme='white' variant='ghost'>
          <ChevronRightIcon color="cyan" />
          Setting
        </Button>
        <Button colorScheme='white' variant='ghost'>
          <ChevronRightIcon color="cyan" />
          Log Out
        </Button>
      </Stack>
      <Footer></Footer>
    </div>
  );
};

export default studentPage;
