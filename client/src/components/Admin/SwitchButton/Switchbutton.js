import React from "react";
import { Link } from "react-router-dom";
import styles from "./switchbutton.module.css";
import { Container, Box, Text, HStack } from "@chakra-ui/react";
import { AddIcon, ViewIcon } from "@chakra-ui/icons";

export default function Switchbutton() {
  return (
    <Container textAlign={"center"}>
      <HStack textAlign={'center'}>
        <Box>
          <Link to="/add">
            <HStack>
              <AddIcon />
              <Text>Add</Text>
            </HStack>
          </Link>
        </Box>
        <Box>
          <Link to="/view">
            <HStack>
              <ViewIcon />
              <Text>View</Text>
            </HStack>
          </Link>
        </Box>
      </HStack>
    </Container>
  );
}
