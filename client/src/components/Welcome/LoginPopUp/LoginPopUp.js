import React from 'react';
import styles from './loginpopup.module.css'
import { Box, Button, Flex, Text } from '@chakra-ui/react'


export default function LoginPopUp() {
    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            className={styles.container}>

            <Box className={styles.btnContainer} >
                <Text

                    fontSize={"6xl"}
                    textAlign={"center"}
                    p={"1rem"}
                    mb={"2.5rem"}
                >
                    LOGIN & 
                </Text>

                <Flex w={"100%"} justifyContent={"center"} gap={2}>

                    <Button
                        className={`${styles.asAdminbtn} ${styles.outlineBtn}`}
                        bg={"prakalp.0"}
                        border={"2px solid #03C988"}
                        mx={"10px"}
                        _hover={{ bg: "prakalp.6" }}
                    >
                        <Text fontSize={'1.5rem'}>As Viewer</Text>
                    </Button>

                    <Button
                        className={styles.asAdminbtn}
                        bg={"prakalp.1"}
                        mx={"10px"}
                        _hover={{ bg: "prakalp.6" }}>
                        <Text fontSize={'1.5rem'}>As Admin</Text></Button>
                </Flex>
            </Box>
        </Flex>
    )
}
