import React, { useState } from "react";
import styles from "./largebtn.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Largebtn() {
  const navigate = useNavigate();

  const [button, setButton] = useState("btn1");
  const handleLeftBtn = (e) => {
    setButton("btn1");
  };
  const handleRightBtn = (e) => {
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
        <Button
          onClick={() => {
            navigate("/");
            handleLeftBtn();
          }}
          bg={"prakalp.0"}
          color={button === "btn1" ? "white" : "black"}
          leftIcon={
            <AddIcon
              style={{
                stroke: button === "btn1" ? "white" : "black",
                strokeWidth: "2",
              }}
            />
          }
          size={"lg"}
          className={styles.leftBtn}
          id="btn1"
        >
          <Text mx={5}>Add</Text>
        </Button>
        <Button
          onClick={() => {
            navigate("/viewProject");
            handleRightBtn();
          }}
          bg={"prakalp.0"}
          aria-label="Add to friends"
          leftIcon={<FaEye size={25} />}
          size={"lg"}
          className={styles.rightBtn}
          id="btn2"
          color={button === "btn2" ? "white" : "black"}
        >
          <Text mx={5}>View</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
