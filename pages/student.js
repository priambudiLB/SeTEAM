import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Table, Thead, Tbody, Tr, Th, Td, Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

const studentPage = () => {
  return (
    <div>
      <title>Student Page</title>
      <Navbar></Navbar>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Profile
        </MenuButton>
        <MenuList>
          <MenuItem>Course</MenuItem>
          <MenuItem>Progress</MenuItem>
          <MenuItem>Statistic</MenuItem>
          <MenuItem>Setting</MenuItem>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
      <Table variant="simple" colorScheme="white" mt="20px" size="md" w="90%" mx="auto">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Student Name</Th>
            <Th>Course</Th>
            <Th>Instructor Name</Th>
          </Tr>
        </Thead>
        <Tbody>
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
        </Tbody>
      </Table>
      <Footer></Footer>
    </div>
  );
};

export default studentPage;
