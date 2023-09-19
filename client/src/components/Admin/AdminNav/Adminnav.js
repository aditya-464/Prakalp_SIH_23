import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./adminnav.module.css";
import { Text, Button, Flex, Heading, Box, HStack } from "@chakra-ui/react";

export default function Navwelcome() {
  return (
    <nav className={styles.navBackground}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        py={15}
      >
        <NavLink to="/">
          <Heading
            as={"h1"}
            ml={"65px"}
            style={{
              fontWeight: "400",
              letterSpacing: "1px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Prakalp
          </Heading>
        </NavLink>
        <HStack
          mr={65}
          fontSize={"2xl"}
          spacing={12}
        >
          <NavLink to="/">
            <Box>Home</Box>
          </NavLink>
          <NavLink to="/">
            <Box>About</Box>
          </NavLink>
          <NavLink to="/">
            <Box>Account</Box>
          </NavLink>
        </HStack>

      </Flex>
    </nav>
  );
}
