import React from 'react'
import {useState} from "react"
import { Box } from '@chakra-ui/react';
import { ImCross } from "react-icons/im"
import { BsHeart } from "react-icons/bs";
import "./cart.css";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
export default function Counter({ value1 }) {
  console.log(value1)
  const isAuth = true;
  const [countervalue, setCounterValue] = useState(0);
  console.log(countervalue)
  const handlechange = (value) => {
    if (countervalue <= 0 && value === -1) {
      return;
    }
    setCounterValue((previous) => previous + value);
  }
  return (
    <div className='counterdiv'>
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
            className="cartbtn"
            onClick={() => {
              handlechange(-1);
            }}
          >
            {AiFillMinusCircle()}
          </button>
        ) : (
          ""
        )}
        <span>{countervalue}</span>
        {isAuth ? (
          <button
            className="cartbtn"
            onClick={() => {
              handlechange(1);
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
