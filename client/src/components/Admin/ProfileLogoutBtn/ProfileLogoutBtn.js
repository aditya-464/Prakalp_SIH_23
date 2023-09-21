import React, { useState } from "react";
import styles from "./profilelogoutbtn.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

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
          style={{ left: button === "btn1" ? "0" : "181px" }}
        ></div>
        <Button onClick={(e) => {
          e.preventDefault();
          handleLeftBtn();
          props.setLogout(prev => !prev);
        }}
          bg={"prakalp.0"}
          color={button === "btn1" ? "white" : "black"}
          leftIcon={
            <BsPersonFill
              style={{
                stroke: button === "btn1" ? "white" : "black",
                strokeWidth: "1",
              }}
            />
          }
          size={"lg"}
          className={styles.leftBtn}
          id="btn1"
        >
          <Text mx={5}>Profile</Text>
        </Button>
        <Button onClick={() => {
          handleRightBtn();
          props.setLogout(prev => !prev);
        }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<FiLogOut size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="btn2"
          color={button === "btn2" ? "white" : "black"}
        >
          <Text mx={5}>Logout</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
