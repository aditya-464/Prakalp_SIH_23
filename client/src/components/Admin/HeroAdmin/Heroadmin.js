import React from "react";
import styles from "./heroadmin.module.css";
import { Box, Text } from "@chakra-ui/react";

export default function Heroadmin() {
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
          Hello Admin!
        </Text>
      </Box>
      <Box pb={20}>
        <Text fontSize={'2xl'} color={'white'} pl={'65px'} className={styles.heroParaText}>Add, view and update projects to Prakalp database</Text>
      </Box>
    </Box>
  );
}
