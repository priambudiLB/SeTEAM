import React from "react";
import Navbar from "../components/navbardashboard";
import Sidebar from "../components/sidebarsinstructor";
import { Input, Text, FormControl, FormLabel, Switch, Menu, MenuButton, MenuList, Button, MenuItem, Container } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"

const instractorPage = () => {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
    return (
        <div>
            <title>Add Courses Page</title>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Container mt="-230px" ml="200px">
                <Text mb='8px'>Courses Name</Text>
                <Input
                    onChange={handleChange}
                    size='sm'
                    width='300px'
                    background='white'
                    color='black'
                />
                <Text mb='8px' mt="20px">Description</Text>
                <Input
                    onChange={handleChange}
                    size='sm'
                    width='300px'
                    background='white'
                    color='black'
                />
                <FormControl display='flex' alignItems='center' mt="20px">
                    <Switch size="lg" />
                    <FormLabel ml="10px">
                        Free?
                    </FormLabel>
                </FormControl>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} background="white" color="black" mt="20px">
                        File
                    </MenuButton>
                    <MenuList>
                        <MenuItem>PDF</MenuItem>
                        <MenuItem>Audio</MenuItem>
                    </MenuList>
                </Menu>
            </Container>
        </div>
    );
};

export default instractorPage;
