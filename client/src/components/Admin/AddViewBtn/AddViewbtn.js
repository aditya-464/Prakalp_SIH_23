import React, { useState } from "react";
import styles from "./addviewbtn.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Largebtn() {
  const navigate = useNavigate();

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
<<<<<<< HEAD
        <Button onClick={() => {
          navigate("/"); handleLeftBtn();
=======
        <Button onClick={(e) => {
          e.preventDefault();
          handleLeftBtn();
          props.setShowView(prev => !prev);
>>>>>>> 20cb3572f34a858570a5229362d01c7fe898c9a4
        }}
          bg={"prakalp.0"}
          color={button === "btn1" ? "white" : "black"}
          leftIcon={
            <AddIcon
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
          <Text mx={5}>Add</Text>
        </Button>
        <Button onClick={() => {
          navigate("/viewProject");
          handleRightBtn();
<<<<<<< HEAD
=======
          props.setShowView(prev => !prev);
>>>>>>> 20cb3572f34a858570a5229362d01c7fe898c9a4
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
