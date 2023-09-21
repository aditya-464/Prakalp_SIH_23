import React, { useState } from "react";
import styles from "./homebtngroup.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { FaEye, FaUniversity } from "react-icons/fa";
import { BsFillBookmarkFill, BsFire, BsSearch } from "react-icons/bs";

export default function Largebtn(props) {

  const [button, setButton] = useState("btn1");
  const handleLeftBtn = () => {
    setButton("btn1");
  };
  const handleRightBtn = () => {
    setButton("btn2");
  };
  return (
    <Flex my={"30px"} alignItems={"center"} justifyContent={"center"}>
      <ButtonGroup
        isAttached
        variant="outline"
        bg={"prakalp.2"}
        className={styles.buttonContainer}
      >
        <div
          id={"btn"}
          className={styles.btn}
          style={{ left: button === "btn1" ? "0" : "240px" }}
        ></div>
        <Button onClick={() => {
          handleLeftBtn();
          props.setShowView(true);
        }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<FaUniversity size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="btn2"
          color={button === "btn2" ? "white" : "black"}
        >
          <Text mx={5}>Following</Text>
        </Button>
        <Button onClick={() => {
          handleRightBtn();
          props.setShowView(true);
        }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<BsFillBookmarkFill size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="btn2"
          color={button === "btn2" ? "white" : "black"}
        >
          <Text mx={5}>Bookmarks</Text>
        </Button>
        <Button onClick={() => {
          handleRightBtn();
          props.setShowView(true);
        }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<BsFire size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="btn2"
          color={button === "btn2" ? "white" : "black"}
        >
          <Text mx={5}>Trending</Text>
        </Button>
        <Button onClick={() => {
          handleRightBtn();
          props.setShowView(true);
        }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<BsSearch size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="btn2"
          color={button === "btn2" ? "white" : "black"}
        >
          <Text mx={5}>Search</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
