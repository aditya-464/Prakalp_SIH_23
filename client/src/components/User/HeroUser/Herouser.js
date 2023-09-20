import React from "react";
import styles from "./herouser.module.css";
import { Box, Text } from "@chakra-ui/react";

export default function Herouser({name}) {
  return (
    <Box className={styles.heroBackground}>
      <Box pt={8}>
        <Text
          fontSize={"6xl"}
          color={"white"}
          pl={"65px"}
          className={styles.heroHeadText}
          pb={8}
        >
          Hello {name}!
        </Text>
      </Box>
      <Box pb={20}>
        <Text fontSize={'2xl'} color={'white'} pl={'65px'} className={styles.heroParaText}>Learn and Grow with Prakalp's massive project database</Text>
      </Box>
    </Box>
  );
}
