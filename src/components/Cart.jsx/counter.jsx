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
import { useDispatch } from 'react-redux';
import { getCartData } from '../../redux/Cartpage/action';
import axios from 'axios';
export default function Counter({ value1, value2,value3 }) {
  console.log(value2,"value2");
  const [countervalue, setCounterValue] = useState(value1);
  const isAuth = true;
  const useridData = JSON.parse(localStorage.getItem("userIdyoox"));
  const dispatch = useDispatch();
  let isAuthp;
  if (value1 >= 2 || countervalue>=2) {
    isAuthp = true;
  } else {
    isAuthp = false;
  }
  console.log(countervalue);
  function Addtowishlist() {
    console.log(value2,"lfjdsh")
    axios
      .post(`https://yooxapi.herokuapp.com/wishlistData`, {
        useId: `${useridData}`,
        productId: `${""+value2}`,
      })
      .then(function (response) {
        // handle success
        alert("Add to Dream Box Sucessfully");
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  const handlechange = (value) => {
    if (countervalue <= 0 && value === -1) {
      return;
    }
    setCounterValue((previous) => previous + value);
  }
  const handleDelect = () => {
    fetch(`https://yooxapi.herokuapp.com/cartData/${value3}`, {
      method: "DELETE",
    }).then(()=>dispatch(getCartData()));

  }

  const upadatedata = async () => {
  const rawResponse = await fetch(
    `https://yooxapi.herokuapp.com/cartData/${value2}`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: countervalue }),
    }
  ).then(() => console.log("call the function to update the data on ui"));
  }
  return (
    <div className="counterdiv">
      <Box
        w={"80px"}
        h={"23px"}
        bg={"#d3d5d8"}
        display={"flex"}
        borderRadius={"23px"}
        justifyContent={isAuth ? "space-between" : "center"}
      >
        {isAuthp ? (
          <button
            className="cartbtn"
            onClick={() => {
              handlechange(-1);
            }}
          >
            {AiFillMinusCircle()}
          </button>
        ) : (
          <span style={{ width: "10px" }}> </span>
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
        onClick={() => {
          handleDelect();
        }}
      >
        {ImCross()}REMOVE
      </button>
      <button
        onClick={() => {
          Addtowishlist();
          handleDelect();

        }}
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
