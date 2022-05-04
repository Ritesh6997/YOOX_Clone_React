import React from 'react'
import { Box, Button, flexbox, Radio } from '@chakra-ui/react';
import { ImCross } from "react-icons/im"
import { BsHeart } from "react-icons/bs";

import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineHeart,
} from "react-icons/ai";
export default function Counter() {
  const isAuth = true;
  const handlechange=(value)=>{
    console.log(1);
  }
  return (
    <div>
      <Box
        w={"80px"}
        h={"23px"}
        bg={"#d3d5d8"}
        display={"flex"}
        borderRadius={"23px"}
        justifyContent={isAuth ? "space-between" : "center"}
      >
        {isAuth ? (
          <button
            style={{
              width: "20px",
              height: "23px",
              color: "black",
              borderRadius: "50%",
              paddingBottom: "10px",
              backgroundColor: "white",
              fontSize: "23px",
            }}
          >
            {AiFillMinusCircle()}
          </button>
        ) : (
          ""
        )}
        <span></span>
        {isAuth ? (
          <button
            style={{
              width: "20px",
              height: "23px",
              color: "black",
              borderRadius: "50%",
              paddingBottom: "10px",
              backgroundColor: "white",
              fontSize: "23px",
            }}
          >
            {AiFillPlusCircle()}
          </button>
        ) : (
          ""
        )}
      </Box>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "6px",
          fontSize: "12px",
        }}
      >
        {ImCross()}REMOVE
      </button>
      <br />
      <button
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "6px",
          fontSize: "12px",
        }}
      >
        {BsHeart()}
        MOVE TO YOUR DREAM BOX
      </button>
    </div>
  );
}
