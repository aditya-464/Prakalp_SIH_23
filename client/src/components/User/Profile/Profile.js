import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  SimpleGrid,
  Input,
  HStack,
  Button,
  InputGroup,
  InputRightAddon,
  Tooltip,
} from "@chakra-ui/react";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";

export const Profile = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box px={"12rem"}>
        <SimpleGrid columns={2} columnGap={100} rowGap={10}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"3xl"} fontWeight={"bold"}>
                Full Name
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
                Username
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
                Email ID
              </FormLabel>
              <Input
                type="email"
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
                <Tooltip
                  label={show ? "Hide Password" : "Show Password"}
                  fontSize="xl"
                  placement="top-end"
                >
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
                </Tooltip>
              </InputGroup>
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <HStack my={"5rem"} justify={"flex-end"}>
          <Button
            type="submit"
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
