import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navwelcome.module.css";
import { Text, Button, Flex, Heading, Box } from "@chakra-ui/react";

export default function Navwelcome() {
  return (
    <nav className={styles.navBackground}>
      <Flex alignItems={"center"} justifyContent={"space-between"} py={15}>
        <NavLink to="/">
          <Heading
            as={"h1"}
            ml={"65px"}
            style={{ fontWeight: "500", letterSpacing: "1px" }}
          >
            Prakalp
          </Heading>
        </NavLink>
        <Box mr={"65px"}>
          <Button px={"24px"} py={"19px"} mr={5} className={styles.loginBtn}>
            <Text className={styles.btnText}>Login</Text>
          </Button>
          <Button px={"25px"} py={"20px"} ml={5} className={styles.signupBtn}>
            <Text className={styles.btnText}>Signup</Text>
          </Button>
        </Box>
      </Flex>
    </nav>
  );
}
