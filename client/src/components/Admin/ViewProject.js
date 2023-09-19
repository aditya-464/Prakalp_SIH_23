import React from 'react'
import { FormControl, FormLabel, GridItem, SimpleGrid, Select, Input, HStack, Button, Box } from '@chakra-ui/react';

export const ViewProject = () => {
    return (
        <>
            <Box px={'12rem'}>
                <SimpleGrid columns={2} columnGap={100} rowGap={10}>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'2xl'} fontWeight={'bold'}>
                                Title
                            </FormLabel>
                            <Input placeholder='Type' bg={'gray.200'} variant={'Unstyled'} height={'4rem'} fontSize={'1.25rem'} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'2xl'} fontWeight={'bold'}>
                                Course
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'4rem'} fontSize={'1.25rem'}>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'2xl'} fontWeight={'bold'}>
                                Stream
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'4rem'} fontSize={'1.25rem'}>
                                <option value='option1'>Computer Science</option>
                                <option value='option2'>Electronics and Communication Engineering</option>
                                <option value='option3'>Information Technology</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'2xl'} fontWeight={'bold'}>
                                Year
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'4rem'} fontSize={'1.25rem'}>
                                <option value='option0'>All</option>
                                <option value='option1'>1st Year</option>
                                <option value='option2'>2nd Year</option>
                                <option value='option3'>3rd Year</option>
                                <option value='option4'>4th Year</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                </SimpleGrid>
                <HStack my={'5rem'} justify={'flex-end'}  >
                    <Button py={'2rem'} px={'4rem'} letterSpacing={'2px'} borderRadius={'20px'} colorScheme='whatsapp' fontSize={'1.25rem'} variant={'solid'} background={'prakalp.1'} >Search</Button>
                </HStack >
            </Box>
        </>
    )
}
