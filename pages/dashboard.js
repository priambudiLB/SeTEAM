import {
    Flex, Heading, Avatar, AvatarGroup, Text, Icon, IconButton, Table, Thead, Tbody, Tr, Th,
    Td, Divider, Link, Box, Button, Input, InputGroup, InputLeftElement,
    Stack, HStack, VStack
} from '@chakra-ui/react'
import {
    FiHome, FiBook,
    FiPlus, FiUsers, FiBell
} from "react-icons/fi"
import { useState } from "react";
import ProgressDashboard from '../components/ProgressDashboard/index';
import { ReadDataFromRDB } from "../components/ReadDataFromRDB.js";
import WriteDataVideo from "../components/WriteDataVideo";
import UploadVideoClD from "../components/UploadVideoCloudinary"
import SignOutUser from '../components/SignOutUser';

function Dashboard() {
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
                w={["100%", "100%", "10%", "15%"]}
                flexDir="column"
                alignItems="center"
                bgColor="#171A21"
                color="#FFF"
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
                            fontSize={["4xl", "5xl", "1.5xl", "2xl", "2xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            SeTEAM.
                        </Heading>
                        <ReadDataFromRDB />
                        <Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={6}>
                                <Link display={["none", "none", "flex", "flex", "flex"]} >
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link href="/" _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text className="active" ml={3} >Home</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={6}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiBook} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text ml={3}>Other Courses</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={6}>
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
                        <SignOutUser />
                        <Avatar my={2} src="#" />
                        <Text textAlign="center">TEST REDUX</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* col2 */}
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
                            Welcome back, <Flex display="inline-flex" fontWeight="bold">TEST REDUX</Flex>
                        </Heading>
                    </Box>
                    <Box >
                        <ProgressDashboard />
                    </Box>
                    <Box>
                        <WriteDataVideo />
                    </Box>
                    <Box>
                        <UploadVideoClD />
                    </Box>

                </VStack>
            </Flex>

            {/* col 3 */}
            <Flex
                width={["100%", "100%", "30%"]}
                bgColor="#171A21" padding="3%"
                flexDirection="column"
                overflow="auto"
                minWidth={[null, null, "300px", "300px", "400px"]}
                color="#FFF"
            >
                <Flex >
                    <InputGroup bgColor="#171A21" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
                        <InputLeftElement
                            pointerEvents="none"
                        />
                        <Input type="string" placeholder="Find Course" borderRadius="10px" />
                    </InputGroup>
                    <IconButton icon={<FiBell color="#171A21" />} fontSize="sm" bgColor="#fff" borderRadius="50%" padding="10px" />
                    <Flex
                        width={30}
                        height={25}
                        bgColor="#fff"
                        borderRadius="50%"
                        color="#171A21"
                        align="center"
                        justify="center"
                        margin-left="-3"
                        margin-top="-2"
                        zIndex="100"
                        fontSize="s"
                    >
                        3
                    </Flex>
                </Flex>
                <Heading letterSpacing="tight">My Courses</Heading>
                {value == 1 &&
                    <Box
                        borderRadius="10px"
                        mt={4}
                        w="100%"
                        h="150px"
                        backgroundColor="#FFF"
                    >
                        <Flex p="1em" color="#1C4532" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="#1C4532">Data Structure</Text>
                                    <Text fontWeight="bold" fontSize="xl">Rp.100.000,00</Text>
                                </Flex>
                                <Flex align="center">
                                </Flex>
                            </Flex>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Instructor</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                    </Flex>
                                </Flex>
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
                        backgroundColor="#FFF"
                    >
                        <Flex p="1em" color="#1C4532" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="#1C4532">Python</Text>
                                    <Text fontWeight="bold" fontSize="xl">Rp.50.000,00</Text>
                                </Flex>
                                <Flex align="center">
                                </Flex>
                            </Flex>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Instructor</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                    </Flex>
                                </Flex>
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
                        backgroundColor="#FFF"
                    >
                        <Flex p="1em" color="#1C4532" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="#1C4532">Database</Text>
                                    <Text fontWeight="bold" fontSize="xl">Rp.100.000,00</Text>
                                </Flex>
                                <Flex align="center">
                                </Flex>
                            </Flex>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Instructor</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                    </Flex>
                                </Flex>
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

                </Flex>
                <Heading letterSpacing="tight" size="md" my={4}>Send money to</Heading>
                <Flex>
                    <AvatarGroup size="md" max={3}>
                        <Avatar src="#" />

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
            {/* col 4 */}

        </Flex>
    )
}

export default Dashboard;
