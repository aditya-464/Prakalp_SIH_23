import React from 'react'
import styles from "./about.module.css";
import { Box, Text, Flex, Image } from '@chakra-ui/react'

import logo from '../../assets/images/jharkhandLogo.png'
import welcome1 from '../../assets/images/welcome1.jpg'
import emergingDevs from '../../assets/images/EmergingDevs.jpg'
import about3 from '../../assets/images/About3.jpg'


export default function About() {
  return (
    <>
      {/* header */}
      <Flex pl={65} pt={8} pb={8}
        justifyContent={"space-between"}
        alignItems={"center"}
        className={styles.heroBackground} >

        <Box width={"33.33%"}>
          <Text
            fontSize={"6xl"}
            color={"white"}
            className={styles.heroHeadText}
            pb={8}
          >
            Prakalp
          </Text>

          <Text fontSize={'2xl'} color={'white'} className={styles.heroParaText}>Initiative by the Government of Jharkhand to provide centralized platform for submission of projects across all institutions in India. </Text>
        </Box>

        <Box mr={85} >
          <Image src={logo} width={"180px"} />
        </Box>

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
            Why Prakalp?
          </Text>

          <Text fontSize={'2xl'}
            className={styles.heroParaText}
          >
            Centralized web application for submission of projects accross all Universities/Colleges in India facilitating peer-learning and cross-functional research.
          </Text>

        </Box>

        <Box w={"35%"} mr={65} >
          <Image src={welcome1} width={"100%"} rounded={"15px"} />
        </Box>

      </Flex>

      {/* 2nd row */}
      <Flex m={65} justifyContent={"space-between"}>

        <Box w={"35%"} ml={65}>
          <Image src={emergingDevs} width={"50%"} rounded={"50%"} ml={"100px"} />
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
            Emerging_DEVS
          </Text>

          <Text fontSize={'2xl'}
            className={styles.heroParaText}
            textAlign={"right"}
          >
            Prakalp is made by handful of ignited minds of NSEC Kolkata under Smart India Hackathon 2023 to make people's life easier with modern technology.
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
            Smart India Hackathon 2023
          </Text>

          <Text fontSize={'2xl'}
            className={styles.heroParaText}
          >
            Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives.
          </Text>

        </Box>

        <Box w={"35%"} mr={65}>
          <Image src={about3} width={"100%"} rounded={"15px"} />
        </Box>

      </Flex>
    </>
  )
}


