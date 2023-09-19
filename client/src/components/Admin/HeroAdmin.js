import React from 'react'
import { Flex, Text } from '@chakra-ui/react';

export const HeroAdmin = () => {
    return (
        <Flex px={'65px'} pt={'25px'} bgGradient={'linear-gradient(276.58deg, #03C988 0%, rgba(4, 176, 128, 0.904683) 63.02%, rgba(4, 170, 127, 0.883512) 96.35%, rgba(4, 170, 126, 0.881235) 99.94%, rgba(4, 136, 116, 0.753648) 99.95%, rgba(5, 135, 116, 0.750288) 99.96%, rgba(4, 148, 120, 0.799034) 99.97%, rgba(7, 46, 88, 0.415426) 99.98%, rgba(7, 32, 84, 0.363541) 99.99%, rgba(7, 25, 82, 0.335869) 100%, rgba(255, 255, 255, 0) 100%)'}
            color={"white"} height='130px' direction={'column'}>
            <Text fontSize={'6xl'}>
                Hello Admin!
            </Text>
            <Text mt={'5px'} fontSize={'2xl'} >
                Add, view and update projects to Prakalp database
            </Text>
        </Flex >

    )
}

