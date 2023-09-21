import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  GridItem,
  SimpleGrid,
  Select,
  Input,
  Textarea,
  HStack,
  Button,
  Flex,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";

export const Profile = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <>
      <Box px={"12rem"}>
        <SimpleGrid columns={2} columnGap={100} rowGap={10}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                AISHE Code
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
                Institute Name
              </FormLabel>
              <Select
                bg={"prakalp.2"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"5rem"}
                fontSize={"1.5rem"}
                style={{ borderRadius: "7px" }}
              >
                <option value="option1">IIT Bombay</option>
                <option value="option2">IIT Delhi</option>
                <option value="option3">IIT Garia</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Email ID
              </FormLabel>
              <Input
                type="email"
                placeholder="Type"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                height={"5rem"}
                style={{ borderRadius: "7px" }}
                fontSize={"1.5rem"}
              />
              <FormHelperText
                fontSize={"14px"}
                style={{ letterSpacing: "0.5px" }}
              >
                Your Email is completely secure with us.
              </FormHelperText>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Contact Number
              </FormLabel>
              <InputGroup>
                <InputLeftAddon
                  variant={"Unstyled"}
                  bg={"prakalp.2"}
                  children="+91"
                  fontSize={"1.5rem"}
                  height={"5rem"}
                  style={{ borderRadius: "7px 0 0 7px", border: "none" }}
                />
                <Input
                  variant={"Unstyled"}
                  type="tel"
                  placeholder="Contact Number"
                  height={"5rem"}
                  fontSize={"1.5rem"}
                  bg={"prakalp.2"}
                  style={{ borderRadius: "0 7px 7px 0" }}
                />
              </InputGroup>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Username
              </FormLabel>
              <Input
                placeholder="Type"
                bg={"prakalp.2"}
                variant={"Unstyled"}
                height={"5rem"}
                style={{ borderRadius: "7px" }}
                fontSize={"1.5rem"}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Type"
                  bg={"prakalp.2"}
                  variant={"Unstyled"}
                  height={"5rem"}
                  fontSize={"1.5rem"}
                  style={{ borderRadius: "7px 0 0 7px" }}
                />
                <InputRightAddon
                  variant={"Unstyled"}
                  bg={"prakalp.2"}
                  children={show ? <PiEyeBold /> : <PiEyeClosedBold />}
                  fontSize={"2rem"}
                  cursor={"pointer"}
                  height={"5rem"}
                  style={{ borderRadius: "0 7px 7px 0" }}
                  onClick={handleClick}
                />
              </InputGroup>
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <SimpleGrid columns={2} columnGap={100} rowGap={10} my={'30px'}>
          <GridItem colSpan={1}>
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"3xl"} fontWeight={"bold"} mb={"20px"}>
                  Insignia
                </FormLabel>
                <Input
                  type="file"
                  id="file"
                  accept="image/png, image/jpeg"
                  style={{ display: "none", borderRadius: "7px" }}
                  onChange={onSelectFile}
                />
                <label htmlFor="file">
                  <Flex
                    h={"23.5rem"}
                    w={"100%"}
                    p={"5px 10px"}
                    fontSize={"1.5rem"}
                    style={{ border: "dotted 2px gray", borderRadius: "15px" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {(selectedFile && (
                      <img
                        src={preview}
                        style={{ maxHeight: "200px" }}
                        alt="uploaded!"
                      />
                    )) ||
                      "Select or Drag Image"}
                  </Flex>
                </label>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack spacing={"30px"}>
              <FormControl isRequired>
                <FormLabel fontSize={"3xl"} fontWeight={"bold"} mb={"20px"}>
                  Official website link
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
              <FormControl isRequired>
                <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                  Bio
                </FormLabel>
                <Textarea
                  h={"12rem"}
                  placeholder="Type Bio"
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
            </VStack>
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
            UPDATE
          </Button>
        </HStack>
      </Box>
      <Footer />
    </>
  );
};
