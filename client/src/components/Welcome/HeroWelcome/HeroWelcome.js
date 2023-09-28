import React from 'react'
import styles from "./herowelcome.module.css";
import { Box, Text, Flex, Image, VStack } from '@chakra-ui/react'

import welcome1 from '../../../assets/images/welcome1.jpg'
import welcome2 from '../../../assets/images/welcome2.jpg'
import welcome3 from '../../../assets/images/welcome3.jpg'
import img from '../../../assets/images/jharkhandLogo.png'


export default function HeroWelcome() {
  return (
    <>
      {/* header */}
      <Flex pl={65} pt={8} pb={8} m={0}
        justifyContent={"space-between"}
        alignItems={"center"}
        className={styles.heroBackground} >

        <Box width={"33.33%"}>
          <Text
            fontSize={"7xl"}
            color={"white"}
            className={styles.heroHeadText}
            pb={8}
          >
            Prakalp
          </Text>

          <Text fontSize={'3xl'} color={'white'} className={styles.heroParaText}>Initiative by the Government of Jharkhand to provide centralized platform for submission of projects across all institutions in India. </Text>
        </Box>

        <Flex flexDirection={"row-reverse"} mr={85}>
          <Image src={img} width={"33%"}/>
        </Flex>

      </Flex>

      {/* 1st row */}
      <Flex ml={65} mt={100} mr={65} mb={100} justifyContent={"space-between"} >

        <Box w={"40%"} h={""} pl={20}>
          <Text
            fontSize={"6xl"}
            fontWeight={"bold"}
            color={"Black"}
            className={styles.heroHeadText}
            pb={8}
          >
            Centralized Platform for Project submission
          </Text>

          <Text fontSize={'3xl'}
            className={styles.heroParaText}
          >
            Projects can be categorized under various levels and easily stored in pdf format along with proper documentation
          </Text>

        </Box>

        <Box w={"35%"} mr={65} >
          <Image src={welcome1} width={"100%"} />
        </Box>

      </Flex>

      {/* 2nd row */}
      <Flex m={65} justifyContent={"space-between"}>

        <Box w={"35%"} ml={65} >
          <Image src={welcome2} width={"100%"} />
        </Box>

        <Box w={"40%"} pr={20}>
          <Text
            fontSize={"6xl"}
            fontWeight={"bold"}
            color={"Black"}
            className={styles.heroHeadText}
            pb={8}
            textAlign={"right"}
          >
            Multi-level Plagiarism Detection
          </Text>

          <Text fontSize={'3xl'}
            className={styles.heroParaText}
            textAlign={"right"}
          >
            For every project, Level 1 plagiarism check is done within the system database and Level 2 check is done throughout the internet.
          </Text>

        </Box>



      </Flex>

      {/* 3rd row */}
      <Flex ml={65} mt={100} mr={65} mb={100} justifyContent={"space-between"} >

        <Box w={"40%"} pl={20}>
          <Text
            fontSize={"6xl"}
            fontWeight={"bold"}
            color={"Black"}
            className={styles.heroHeadText}
            pb={8}
          >
            Personalized Projects Recommendation
          </Text>

          <Text fontSize={'3xl'}
            className={styles.heroParaText}
          >
            Using Artificial Intelligence(AI), viewers will be suggested projects in their feed section based on their search activity and past history.
          </Text>

        </Box>

        <Box w={"35%"} mr={65}>
          <Image src={welcome3} width={"100%"} />
        </Box>

      </Flex>
    </>
  )
}


