import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navwelcome.module.css";
import { Text, Button, Flex, Heading, Box } from "@chakra-ui/react";

export default function Navwelcome() {
  return (
    <nav className={styles.navBackground}>
      <Flex alignItems={"center"} justifyContent={"space-between"} py={7}>
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
        <Box mr={"65px"}>
          <Button
            bg="prakalp.0"
            height={"39px"}
            width={40}
            mr={5}
            className={styles.loginBtn}
          >
            <Text className={styles.btnText}>Login</Text>
          </Button>
          <Button
            height={"40px"}
            width={40}
            ml={5}
            className={styles.signupBtn}
          >
            <Text className={styles.btnText}>Signup</Text>
          </Button>
        </Box>
      </Flex>
    </nav>
  );
}
