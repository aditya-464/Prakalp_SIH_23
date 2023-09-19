import React from 'react'
import { Box, VStack, Text, Container } from '@chakra-ui/react'

function Footer() {
    return (
        <>
            <Box
                bg="blackAlpha.800"
                color="prakalp.2">
                <Container
                    as={VStack}
                    maxW={'full'}
                    py={8}
                    direction={{ base: 'column', md: 'row' }}
                    // spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>

                    <Text fontSize={{ base: '1xl', md: "3xl" }}
                        fontFamily={"'Poppins', sans-serif"}>
                        © 2023 | All rights reserved | Smart India Hackathon | Made by Emerging_DEVS</Text>

                </Container>
            </Box>
        </>
    )
}

export default Footer
