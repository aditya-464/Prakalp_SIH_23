"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Text
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const LinkItems = [
  { name: "What is C# Programming" },
  { name: "Which to choose React or..." },
  { name: "Is C++ better than Java for..." },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={() => onOpen()} m={4}>
        Hello
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"sm"} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AddIcon />
            <Text>Open the drawer</Text>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
