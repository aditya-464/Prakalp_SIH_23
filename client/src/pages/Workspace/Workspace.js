import React, { useState } from "react";
import Usernav from "../../components/User/UserNav/Usernav";
import Herouser from "../../components/User/HeroUser/Herouser";
import { Box } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/User/Sidebar/Sidebar";
import { HStack } from "@chakra-ui/react";
import QSpace from "../../components/User/QSpace/QSpace";

export const Workspace = () => {
  const styles = {
    scrollbar: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  };
  return (
    <>
      <Box className="HomeAdmin" height={"100vh"} overflow={"hidden"}>
        <Usernav />
        <Box
          sx={styles.scrollbar}
          style={{ overflowY: "scroll", height: "calc(100% - 68px)" }}
        >
          <Herouser name={"Aditya"} />
          <HStack>
            <Sidebar />
            <QSpace/>
          </HStack>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
