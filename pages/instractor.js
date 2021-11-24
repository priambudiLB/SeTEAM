import React from "react";
import Navbar from "../components/navbardashboard";
import Footer from "../components/footer";
import { Table, Thead, Tbody, Tr, Th, Td, Menu, MenuButton, MenuList, IconButton, MenuItem } from "@chakra-ui/react"
import { HamburgerIcon, ArrowForwardIcon } from "@chakra-ui/icons"

const studentPage = () => {
  return (
    <div>
      <title>Student Page</title>
      <Navbar></Navbar>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          marginTop="10px"
          marginLeft="10px"
        />
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem icon={<ArrowForwardIcon/>}>Course</MenuItem>
          <MenuItem>Progress</MenuItem>
          <MenuItem>Statistic</MenuItem>
          <MenuItem icon={<ArrowForwardIcon/>}>Setting</MenuItem>
          <MenuItem icon={<ArrowForwardIcon/>}>Log Out</MenuItem>
        </MenuList>
      </Menu>
      <Table variant="simple" colorScheme="white" mt="20px" size="md" w="90%" mx="auto" borderLeft="solid" borderRight="solid" borderWidth="1px">
        <Thead>
          <Tr>
            <Th>Instractor Name</Th>
            <Th>Course</Th>
            <Th>Number of student</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
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
