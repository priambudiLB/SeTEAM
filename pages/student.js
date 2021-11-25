import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Table, Thead, Tr, Th, Td } from "@chakra-ui/react"

const studentPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Table variant="striped" colorScheme="red" mt="20px" size="md">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Student Name</Th>
            <Th>Course</Th>
            <Th>Instructor Name</Th>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Thead>
      </Table>
      <Footer></Footer>
    </div>
  );
};

export default studentPage;
