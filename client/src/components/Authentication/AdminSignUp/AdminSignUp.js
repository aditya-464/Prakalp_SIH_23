import React from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    Text,
    Link,
    FormControl,
    FormLabel,

} from "@chakra-ui/react";



export default function AdminSignUp() {
  
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Box minW={{ base: "90%", md: "468px" }}
                    border={"2px solid #03C988"}
                    borderRadius={15}
                    overflow={"hidden"}
                    boxShadow="md"

                >
                    <Heading
                        textAlign={"center"}
                        mt="5"
                    >
                        Signup
                    </Heading>

                    <form>
                        <Stack
                            spacing={5}
                            p="2rem"
                            backgroundColor="whiteAlpha.900"
                            fontSize={"2rem"}
                        >
                            <FormControl isRequired>
                                <FormLabel fontSize={'2xl'}>AISHE Code</FormLabel>
                                <Input
                                    fontSize={'1.5rem'}
                                    height={'5rem'}
                                    bg={'prakalp.2'}
                                    type="text"
                                    placeholder="AISHE code of institute" />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontSize={'2xl'}>Institute name</FormLabel>
                                <Input
                                    fontSize={'1.5rem'}
                                    height={'5rem'}
                                    bg={'prakalp.2'}
                                    type="text"
                                    placeholder="Institute name" />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontSize={'2xl'}>E-mail</FormLabel>
                                <Input
                                    fontSize={'1.5rem'}
                                    height={'5rem'}
                                    bg={'prakalp.2'}
                                    type="email"
                                    placeholder="E-mail" />
                            </FormControl>
                            
                            <FormControl isRequired>
                                <FormLabel fontSize={'2xl'}>Username</FormLabel>
                                <Input
                                    fontSize={'1.5rem'}
                                    height={'5rem'}
                                    bg={'prakalp.2'}
                                    type="text"
                                    placeholder="Username" />
                            </FormControl>

                            <FormControl isRequired mb={5}>
                                <FormLabel fontSize={'2xl'}>Password</FormLabel>
                                <Input
                                    height={'5rem'}
                                    type='password'
                                    placeholder="Password"
                                    bg={'prakalp.2'}
                                    fontSize={'1.5rem'}
                                />
                            </FormControl>

                        </Stack>
                    </form>

                    <Button
                        type='submit'
                        bg='prakalp.1'
                        borderRadius={0}
                        mb={0} p={12} w={"100%"}
                        _hover={{ bg: "prakalp.6" }}
                    >
                        <Text
                            textAlign={"center"}
                            color={"white"}
                            fontSize={"2rem"}
                            letterSpacing={2}

                        >
                            GET OTP
                        </Text>
                    </Button>
                </Box>
            </Stack>

            <Box fontSize={"2xl"} mt={4}>
                Already have an account ?{" "}
                <Link color="prakalp.1" href="#" fontWeight={'bold'}>
                    Login
                </Link>
            </Box>

        </Flex>
    )
}