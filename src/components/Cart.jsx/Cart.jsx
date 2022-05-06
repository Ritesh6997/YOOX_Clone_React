import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Button,Box} from '@chakra-ui/react';
import Cart1 from './cart1';
import {Store} from "../Redux/store"
export default function Cart() {

  useEffect(() => {
    getData();
    
  }, [])
  async function getData() {
    let res = await fetch("");
    let data = await res.json();
   }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "10px",
          fontSize: "20px",
          fontFamily: "cursive",
          fontWeight: "bolder",
        }}
      >
        SHOPPING BAG
      </h1>

      <Box
        display={"flex"}
        justifyContent="space-around"
        alignContent={"center"}
        m="20px 0px"
      >
        <Box textDecoration={"underline"} mt="15px">
          <Link to="/">BACK TO SHOPPING</Link>
        </Box>
        <Box>
          <Link to="/">
            <Button bg={"#febf08"} padding="25px">
              {" "}
              <img
                src="https://www.yoox.com/media/yoox16/logos/paypal_logo_txt.png?v=1"
                alt="paypal"
              />{" "}
              CHECK OUT
            </Button>
          </Link>{" "}
          or
          <Link to="/">
            {" "}
            <Button
              bg={"black"}
              color={"white"}
              fontSize={"15px"}
              padding="25px 10px"
            >
              PROCEED WITH YOUR ORDER {">"}{" "}
            </Button>{" "}
          </Link>
        </Box>
      </Box>
      <hr style={{ border: "2px solid #d2d2ce", backgroundColor: "#d2d2ce" }} />
      <div>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          ITEMS ADDED TO YOUR SHOPPING BAG (2)
        </h2>
      </div>
      <Cart1></Cart1>
    </div>
  );
}
