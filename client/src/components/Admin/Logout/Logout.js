import React from "react";
import { Text, VStack, HStack, Button } from "@chakra-ui/react";
import styles from "./logout.module.css";

export const Logout = () => {
  return (
    <>
      <VStack textAlign={"center"} minH={"190px"}>
        <Text fontSize={"2rem"} className={styles.logoutText} my={"20px"}>
          Are you certain, you want to logout ?
        </Text>
        <HStack>
          <Button
            className={`${styles.logoutbtn} ${styles.outlineBtn}`}
            bg={"prakalp.0"}
            border={"1px solid #03C988"}
            mx={"10px"}
            _hover={{ bg: "prakalp.6" }}
          >
            <Text fontSize={'1.5rem'}>YES</Text>
          </Button>
          <Button
            className={styles.logoutbtn}
            bg={"prakalp.1"}
            mx={"10px"}
            _hover={{ bg: "prakalp.6" }}
          >
            <Text fontSize={'1.5rem'}>NO</Text>
          </Button>
        </HStack>
      </VStack>
    </>
  );
};
