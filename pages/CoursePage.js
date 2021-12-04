
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
import { useState } from "react";
import { handlerA } from "./api/hello";

import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'di1kxmnrn'
    }
});


function CoursePage() {
    const [value, changeValue] = useState(1)

    const themeColor = "#B2F5EA";
    const fontColor = "#@30c040";

    // https://cloudinary.com/documentation/video_player_how_to_embed#specify_the_video_to_play_and_optional_player_configurations


    // Instantiate a CloudinaryVideo object for the video with public ID, 'elephants'.
    const imageURL = "RANDOM.ORG_-_List_Randomizer_-_Google_Chrome_2021-11-16_17-39-59_bmh6oq"
    const myVideo = cld.video(imageURL);
    myVideo.resize(scale().width(400));
    // Get the URL of the video.
    const myURL = myVideo.toURL();
    console.log(myURL)

    return (

        <Flex h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["row", "row", "row"]}
            overflow="hidden">
            {/* first col */}
            <Flex
                // w={["50%", "50%", "10%", "15%", "15%"]}
                w={["25%", "25%", "10%", "15%"]}
                flexDir="column"
                alignItems="center"
                bgColor="#171A21"
                color="#FFF"
                overflow="hidden"
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
                            fontSize={["4xl", "5xl", "1.5xl", "2xl"]}
                            alignSelf="center"
                            letterSpacing="tight"
                            display={{ base: "column", md: "none", ld: "none" }}
                        >
                            COURSE
                        </Heading>
                       
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

                </Flex>
            </Flex>

            {/* second col  */}
            <Flex w={["100%", "100%", "60%", "60%", "55%"]}
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh">
                <Flex>

                    <video
                        height="360"
                        width="720"
                        controls
                    >
                        <source src={myURL} type="video/mp4"></source>
                    </video>

                </Flex>
                <Flex flexDir="row">
                    <section>
                        <h1> About This Course</h1>
                        <p>Data</p>
                        <p>Data</p>
                    </section>
                    
                </Flex>

            </Flex>
        </Flex >

    )
}

export default CoursePage;