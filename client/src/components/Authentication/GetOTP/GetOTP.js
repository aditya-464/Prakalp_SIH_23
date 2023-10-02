import React from 'react'
import { 
    Flex,
    Stack, 
    Box, 
    Text, 
    Heading, 
    Button, 
    PinInput, 
    PinInputField, 
    HStack, 
    Link} from '@chakra-ui/react';

export default function GetOTP() {
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
                        m="5"
                        letterSpacing={3}
                        as={"h1"} size={'2xl'}
                    >
                        OTP
                    </Heading>

                    <Text
                        textAlign={'center'}
                        fontSize={'1.8rem'}
                    >
                    Enter the OTP received on registered mail id.</Text>

                    <HStack m={12} justifyContent={'space-around'}>
                        <PinInput otp size={'lg'}>
                            <PinInputField fontSize={'1.5rem'} h={'5rem'} w={'5rem'}bg={'prakalp.2'} />
                            <PinInputField fontSize={'1.5rem'} h={'5rem'} w={'5rem'}bg={'prakalp.2'} />
                            <PinInputField fontSize={'1.5rem'} h={'5rem'} w={'5rem'}bg={'prakalp.2'} />
                            <PinInputField fontSize={'1.5rem'} h={'5rem'} w={'5rem'}bg={'prakalp.2'} />
                            <PinInputField fontSize={'1.5rem'} h={'5rem'} w={'5rem'}bg={'prakalp.2'} />
                            <PinInputField fontSize={'1.5rem'} h={'5rem'} w={'5rem'}bg={'prakalp.2'} />
                            
                        </PinInput>
                    </HStack>
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
                            LOGIN
                        </Text>
                    </Button>
                </Box>
            </Stack>

            <Box fontSize={"2xl"} mt={4}>
                Didn't get OTP?{" "}
                <Link color="prakalp.1" href="#" fontWeight={'bold'}>
                    Resend
                </Link>
            </Box>

        </Flex>
    )
}
