import { Text, Flex } from "@chakra-ui/react";

import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";

const dashboard = () => {
  const titles = ["Profile", "Course", "Settings", "Log Out"];

  return (
    <div>
      <NavBar></NavBar>
      <SideBar titles={titles}></SideBar>
      <Flex>
        <Text></Text>
      </Flex>
    </div>
  );
};

export default dashboard;
