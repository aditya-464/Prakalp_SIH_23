import { NavLink } from "react-router-dom";
import styles from "./navwelcome.module.css";
import { Text, Button, Flex, Heading, Box } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import LoginPopUp from "../LoginPopUp/LoginPopUp";
import React, {useState} from "react";



export default function Navwelcome() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");
  
 
  return (
    <>
      <nav className={styles.navBackground}>
        <Flex alignItems={"center"} justifyContent={"space-between"} py={15}>
          <NavLink to="/">
            <Heading
              as={"h1"}
              ml={"65px"}
              style={{ fontWeight: "400", letterSpacing: "1px", fontFamily: "'Poppins', sans-serif" }}
            >
              Prakalp
            </Heading>
          </NavLink>

          <Box mr={"65px"}>

            <Button bg="prakalp.0"
              height={"39px"}
              width={40}
              mr={5}
              className={styles.loginBtn}
              onClick={() => {onOpen(); setText('Login');}}
              
            >
              <Text className={styles.btnText}>Login</Text>
            </Button>


            <Button
              height={"40px"}
              width={40}
              ml={5}
              className={styles.signupBtn}
              onClick={() => {onOpen(); setText('Signup');}}
              
            >
              <Text className={styles.btnText}>Signup</Text>
            </Button>
          </Box>
        </Flex>
      </nav>

      <Modal size={"3xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton size={'lg'}/>

          <ModalBody>
            <LoginPopUp title={text}/>
          </ModalBody>
          <ModalFooter />

        </ModalContent>
      </Modal>
    </>


  );
}
