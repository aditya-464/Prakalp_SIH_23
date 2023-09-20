import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./usernav.module.css";
import { Text, Flex, Heading, HStack } from "@chakra-ui/react";

export default function Navwelcome() {
  return (
    <nav className={styles.navBackground}>
      <Flex alignItems={"center"} justifyContent={"space-between"} py={23}>
        <NavLink to="/">
          <Heading
            as={"h1"}
            ml={"65px"}
            style={{
              fontWeight: "400",
              letterSpacing: "1px",
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0 0 3px white",
            }}
          >
            Prakalp
          </Heading>
        </NavLink>
        <HStack mr={"60px"}>
          <NavLink to="/">
            <Text className={`${styles.navText} ${styles.navItem}`} mx={15}>
              Home
            </Text>
          </NavLink>
          <NavLink to="/about">
            <Text className={`${styles.navText} ${styles.navItem}`} mx={15}>
              About
            </Text>
          </NavLink>
          <NavLink to="/workspace">
            <Text className={`${styles.navText} ${styles.navItem}`} mx={15}>
              Workspace
            </Text>
          </NavLink>
          <NavLink to="/account">
            <Text className={`${styles.navText} ${styles.navItem}`} mx={15}>
              Account
            </Text>
          </NavLink>
        </HStack>
      </Flex>
    </nav>
  );
}
