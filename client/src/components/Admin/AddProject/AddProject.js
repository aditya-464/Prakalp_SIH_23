import React from 'react'
import { Box, FormControl, FormLabel, GridItem, SimpleGrid, Select, Input, Textarea, HStack, Button } from '@chakra-ui/react';

export const AddProject = () => {

    return (
        <>
            <Box px={'12rem'}>
                <SimpleGrid columns={2} columnGap={100} rowGap={10} >
                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Course
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'}>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1} colEnd={'3'} >
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Stream
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'}>
                                <option value='option1'>Computer Science</option>
                                <option value='option2'>Electronics and Communication Engineering</option>
                                <option value='option3'>Information Technology</option>
                            </Select>
                        </FormControl>
                    </GridItem>


                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Project Type
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'}>
                                <option value='option1'>Individual Project</option>
                                <option value='option2'>Group Project</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Year
                            </FormLabel>
                            <Select bg={'gray.200'} placeholder='Select' variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'}>
                                <option value='option1'>1st Year</option>
                                <option value='option2'>2nd Year</option>
                                <option value='option3'>3rd Year</option>
                                <option value='option3'>4th Year</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Student Name
                            </FormLabel>
                            <Input placeholder='Type' bg={'gray.200'} variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                University Roll
                            </FormLabel>
                            <Input placeholder='Type' bg={'gray.200'} variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Title
                            </FormLabel>
                            <Input placeholder='Type' bg={'gray.200'} variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl >
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Link
                            </FormLabel>
                            <Input placeholder='Type' bg={'gray.200'} variant={'Unstyled'} height={'5rem'} fontSize={'1.5rem'} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Description
                            </FormLabel>
                            <Textarea h={'12rem'} placeholder='Type Description' bg={'gray.200'} variant={'Unstyled'} fontSize={'1.5rem'} resize={'none'}
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        display: 'none'
                                    },
                                }} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel fontSize={'3xl'} fontWeight={'bold'}>
                                Select file(s)
                            </FormLabel>
                            <Input type='file' id="file"
                                style={{ display: "none" }} />
                            <label htmlFor='file'>
                                <Box h={'12rem'} p={'5px 10px'} fontSize={'1.5rem'} borderRadius={'0.375rem'} style={{ border: "dotted 1px gray" }}  >
                                    Select or drag file
                                </Box>
                            </label>
                        </FormControl>
                    </GridItem>

                </SimpleGrid>
                <HStack my={'5rem'} justify={'flex-end'}  >
                    <Button py={'2rem'} px={'4rem'} letterSpacing={'2px'} borderRadius={'20px'} colorScheme='whatsapp' fontSize={'1.5rem'} variant={'solid'} background={'prakalp.1'} >PUBLISH</Button>
                </HStack >
            </Box>
        </>
    )
}
