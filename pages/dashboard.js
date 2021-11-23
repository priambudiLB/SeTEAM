// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react'


import {
    FiHome,
    FiPieChart,
    FiBook,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiUsers,
    FiBell
} from "react-icons/fi"
import StudentDashboard from "./StudentDashboard";
import { useState } from "react";
import ProgressDashboard from '../components/ProgressDashboard/index';


function dashboard() {
    const [value, changeValue] = useState(1)
    const themeColor = "#B2F5EA";
    const fontColor = "#@30c040";
    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* col 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                bgColor="#F5F5F5"
                color=""
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                    color={fontColor}
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={[25, 50, 100]}
                            // fontSize={["2xl", "2xl", "1.5xl", "2xl", "2xl",]}
                            fontSize={["4xl", "5xl", "1.5xl", "2xl", "2xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            SeTEAM.
                        </Heading>
                        <Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"

                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={3}>
                                <Link display={["none", "none", "flex", "flex", "flex"]} >
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text className="active" ml={3} ><a href="/">Home</a></Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={3}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiBook} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text ml={3}>Other Courses</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={3}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiUsers} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text ml={3}>Instructor</Text>
                                </Link>
                            </Flex>


                        </Flex>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="avatar-1.jpg" />


                        {/* USING REDUX IN THIS "CALVIN PART" !!!!!!!!!!!!!!!!!!*/}

                        <Text textAlign="center">WOKEDOKE</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* col 2 */}
            <Flex
            
            w={["100%", "100%", "60%", "60%", "55%"]}
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh">
                <VStack
                    spacing={4}
                    align="stretch"
                >
                    <Box >
                        <Heading
                            fontWeight="normal"
                            mb={4}
                            letterSpacing="tight"
                            color={fontColor}
                        >
                            Welcome back, <Flex display="inline-flex" fontWeight="bold">WOKEDOKE</Flex>
                        </Heading>
                    </Box>
                    <Box >
                        <ProgressDashboard />
                    </Box>

                </VStack>
            </Flex>

            {/* col 3 */}
            <Flex
                width={["100%", "100%", "30%"]}
                bgColor="#F5F5F5" padding="3%"
                flexDirection="column"
                overflow="auto"
                minWidth={[null, null, "300px", "300px", "400px"]}
                color={fontColor}
            >
                <Flex >
                    <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
                        <InputLeftElement
                            pointerEvents="none"

                        />
                        <Input type="string" placeholder="Find Course" borderRadius="10px" />
                    </InputGroup>

                    <IconButton icon={<FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" padding="10px" />

                    <Flex
                        width={30}
                        height={25}
                        bgColor={themeColor}
                        borderRadius="50%"
                        color="#0e0e0e"
                        align="center"
                        justify="center"
                        margin-left="-3"
                        margin-top="-2"
                        zIndex="100"
                        fontSize="xs"
                    >
                        0
                    </Flex>
                </Flex>
                <Heading letterSpacing="tight">My Courses</Heading>
                {value == 1 &&
                    <Box
                        borderRadius="10px"
                        mt={4}
                        w="100%"
                        h="150px"
                        // bgGradient="linear(to-t, #B57295, #29259A)"
                        backgroundColor={themeColor}
                    >
                        <Flex p="1em" color="#1C4532" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="#1C4532">Data Structure</Text>
                                    <Text fontWeight="bold" fontSize="xl">Rp.100.000,00</Text>
                                </Flex>
                                <Flex align="center">
                                    {/* <Icon mr={2} as={FiCreditCard} /> */}
                                    {/* <Text>Rise.</Text> */}
                                </Flex>
                            </Flex>
                            {/* <Text mb={4}>**** **** **** 1289</Text> */}
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Instructor</Text>
                                        {/* <Text fontSize="lg">12/23</Text> */}
                                    </Flex>
                                    <Flex flexDir="column">
                                        {/* <Text textTransform="uppercase" fontSize="xs">CVV</Text> */}
                                        {/* <Text fontSize="lg">***</Text> */}
                                    </Flex>
                                </Flex>
                                {/* <Icon as={FiCreditCard} /> */}
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 2 &&
                    <Box
                        borderRadius="10px"
                        mt={4}
                        w="100%"
                        h="150px"
                        backgroundColor={themeColor}
                    >
                        <Flex p="1em" color="#1C4532" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="#1C4532">Python</Text>
                                    <Text fontWeight="bold" fontSize="xl">Rp.50.000,00</Text>
                                </Flex>
                                <Flex align="center">
                                    {/* <Icon mr={2} as={FiCreditCard} /> */}
                                    {/* <Text>Rise.</Text> */}
                                </Flex>
                            </Flex>
                            {/* <Text mb={4}>**** **** **** 8956</Text> */}
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Instructor</Text>
                                        {/* <Text fontSize="lg">9/24</Text> */}
                                    </Flex>
                                    <Flex flexDir="column">
                                        {/* <Text textTransform="uppercase" fontSize="xs">CVV</Text> */}
                                        {/* <Text fontSize="lg">***</Text> */}
                                    </Flex>
                                </Flex>
                                {/* <Icon as={FiCreditCard} /> */}
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 3 &&
                    <Box
                        borderRadius="10px"
                        mt={4}
                        w="100%"
                        h="150px"
                        backgroundColor={themeColor}
                    >
                        <Flex p="1em" color="#1C4532" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="#1C4532">Database</Text>
                                    <Text fontWeight="bold" fontSize="xl">Rp.100.000,00</Text>
                                </Flex>
                                <Flex align="center">
                                    {/* <Icon mr={2} as={FiCreditCard} /> */}
                                    {/* <Text>Rise.</Text> */}
                                </Flex>
                            </Flex>
                            {/* <Text mb={4}>**** **** **** 8353</Text> */}
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Instructor</Text>
                                        {/* <Text fontSize="lg">11/22</Text> */}
                                    </Flex>
                                    <Flex flexDir="column">
                                        {/* <Text textTransform="uppercase" fontSize="xs">CVV</Text> */}
                                        {/* <Text fontSize="lg">***</Text> */}
                                    </Flex>
                                </Flex>
                                {/* <Icon as={FiCreditCard} /> */}
                            </Flex>
                        </Flex>
                    </Box>
                }
                <Flex justifyContent="center" mt={2}>
                    <Button bgColor={value == 1 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(1)} />
                    <Button bgColor={value == 2 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(2)} />
                    <Button bgColor={value == 3 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(3)} />
                </Flex>
                <Flex flexDir="column" my={4}>
                    {/* <Flex justify="space-between" mb={2}>
                        <Text>Balance</Text>
                        <Text fontWeight="bold">$140.42</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text>Credit Limit</Text>
                        <Text fontWeight="bold">$150.00</Text>
                    </Flex> */}
                </Flex>
                <Heading letterSpacing="tight" size="md" my={4}>Send money to</Heading>
                <Flex>
                    <AvatarGroup size="md" max={3}>
                        <Avatar src="avatar-2.jpg" />
                        {/* <Avatar src="avatar-3.jpg" />
                        <Avatar src="avatar-4.jpg" />
                        <Avatar src="avatar-4.jpg" />
                        <Avatar src="avatar-4.jpg" /> */}
                    </AvatarGroup>
                    <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
                </Flex>

                <Text color="gray" mt={4} mb={2}>Sum</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"

                    />
                    <Input type="number" placeholder="100.000" />
                </InputGroup>
                <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15}>Donate Money</Button>
            </Flex>
        </Flex>

    )
}

export default dashboard;