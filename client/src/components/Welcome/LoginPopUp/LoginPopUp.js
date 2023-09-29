import React from 'react';
import styles from './loginpopup.module.css'
import { Button,VStack, Text, HStack } from '@chakra-ui/react'


export default function LoginPopUp({title}) {
    return (
            <VStack p={15}>
                <Text

                    fontSize={"6xl"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    p={"1rem"}
                    mb={"2.5rem"}
                >
                    {title}
                </Text>

                <HStack>
                    <Button
                        className={`${styles.asAdminbtn} ${styles.outlineBtn}`}
                        bg={"prakalp.0"}
                        border={"2px solid #03C988"}
                        mx={"10px"}
                        _hover={{ bg: "prakalp.6" }}
                    >
                        <Text fontSize={'2rem'}>As Viewer</Text>
                    </Button>

                    <Button
                        className={styles.asAdminbtn}
                        bg={"prakalp.1"}
                        mx={"10px"}
                        _hover={{ bg: "prakalp.6" }}>
                        <Text fontSize={'2rem'}>As Admin</Text></Button>
                </HStack>
            </VStack>
        
    )
}
