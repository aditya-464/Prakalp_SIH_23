import React, { useState } from "react";
import styles from "./homebtngroup.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { FaUniversity } from "react-icons/fa";
import { BsFillBookmarkFill, BsFire, BsSearch } from "react-icons/bs";

export default function Largebtn(props) {
  const [button, setButton] = useState("following");
  const handleBtn = (e) => {
    setButton(e.currentTarget.id);
  };
  const activeBtn = (button) =>{
    let left = "";
    switch (button) {
        case "following":
            left = "0";
            break;
        case "bookmarks":
            left = "250px";
            break;
        case "trending":
            left = "500px";
            break;
        case "search":
            left = "716px";
            break;
        default:
            left = "0";
            break;
    }
    return left;
  }
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
          style={{ left: activeBtn(button) }}
        ></div>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('following');
          }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<FaUniversity size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="following"
          color={button === "following" ? "white" : "black"}
        >
          <Text mx={5}>Following</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('bookmarks');
          }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<BsFillBookmarkFill size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="bookmarks"
          color={button === "bookmarks" ? "white" : "black"}
        >
          <Text mx={5}>Bookmarks</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('trending');
          }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<BsFire size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="trending"
          color={button === "trending" ? "white" : "black"}
        >
          <Text mx={5}>Trending</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('search');
          }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<BsSearch size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="search"
          color={button === "search" ? "white" : "black"}
        >
          <Text mx={5}>Search</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
