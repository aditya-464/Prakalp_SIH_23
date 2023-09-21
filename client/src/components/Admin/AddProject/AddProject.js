import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  SimpleGrid,
  Select,
  Input,
  Textarea,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";

export const AddProject = () => {
  return (
    <>
      <Box px={"12rem"}>
        <SimpleGrid columns={2} columnGap={100} rowGap={10}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Course
              </FormLabel>
              <Select
                bg={"prakalp.2"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} colEnd={"3"}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Stream
              </FormLabel>
              <Select
                bg={"prakalp.2"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              >
                <option value="option1">Computer Science</option>
                <option value="option2">
                  Electronics and Communication Engineering
                </option>
                <option value="option3">Information Technology</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Project Type
              </FormLabel>
              <Select
                bg={"prakalp.2"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              >
                <option value="option1">Individual Project</option>
                <option value="option2">Group Project</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Year
              </FormLabel>
              <Select
                bg={"prakalp.2"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              >
                <option value="option1">1st Year</option>
                <option value="option2">2nd Year</option>
                <option value="option3">3rd Year</option>
                <option value="option3">4th Year</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Student Name
              </FormLabel>
              <Input
                placeholder="Type"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                University Roll
              </FormLabel>
              <Input
                placeholder="Type"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Title
              </FormLabel>
              <Input
                placeholder="Type"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Link
              </FormLabel>
              <Input
                placeholder="Type"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Description
              </FormLabel>
              <Textarea
                h={"12rem"}
                placeholder="Type Description"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                fontSize={"1.5rem"}
                resize={"none"}
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                style={{ borderRadius: "7px" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Select file(s)
              </FormLabel>
              <Input type="file" id="file" style={{ display: "none" }} />
              <label htmlFor="file">
                <Flex
                  h={"12rem"}
                  p={"5px 10px"}
                  fontSize={"1.5rem"}
                  borderRadius={"0.375rem"}
                  style={{ border: "dotted 2px gray", borderRadius: "7px" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  Select or drag file
                </Flex>
              </label>
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <HStack my={"5rem"} justify={"flex-end"}>
          <Button
            py={"2rem"}
            px={"4rem"}
            letterSpacing={"2px"}
            borderRadius={"20px"}
            _hover={{ bg: "prakalp.6" }}
            fontSize={"1.5rem"}
            variant={"solid"}
            background={"prakalp.1"}
            color={"white"}
          >
            PUBLISH
          </Button>
        </HStack>
      </Box>
    </>
  );
};
