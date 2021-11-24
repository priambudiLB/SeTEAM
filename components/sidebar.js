import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Text,
  Spacer,
  Flex,
  Grid,
  HStack,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import NavItem from "../components/navitem";
import { useState } from "react";

const Sidebar = ({ titles }) => {
  const [navSize, setnavSize] = useState("large");
  return (
    <Flex
      p="5%"
      flexDir="column"
      w="300px"
      alignItems={navSize == "small" ? "center" : "flex-start"}
      as="nav"
    >
      {titles.map((title) => (
        <NavItem
          navSize={navSize}
          icon={ChevronRightIcon}
          title={title}
          key={title}
        ></NavItem>
      ))}
    </Flex>
  );
};

export default Sidebar;
