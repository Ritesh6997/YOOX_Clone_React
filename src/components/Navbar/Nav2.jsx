import React from 'react'
import { Box, } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import yooxlogop from "../../logo/yoox-logo-p.svg"
import "./navbar.css"
import { BsFillBagFill, BsSuitHeart, BsSearch } from "react-icons/bs";
export default function Nav2() {
  return (
    <div>
      <div>
        <Box
          w="88%"
          m="auto"
          h="50px"
          borderBottom={"1px solid #c7c1c1"}
          bgGradient="linear(to-t, green.200, pink.500)"
          bg="white"
          fontSize={12.5}
          fontWeight={"555"}
          fontFamily={"Montserrat,sans-serif"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="0 15%"
        >
          <div style={{ display: "flex", columnGap: "12px" }}>
            <Link to="/women">WOMEN</Link>
            <Link to="/men">MEN</Link>
            <Link to="/kids">KIDS</Link>
            <Link to="/designart">DESIGN+ART</Link>
          </div>

          <img width={"70px"} src={yooxlogop} alt="Logo" />

          <div
            style={{
              display: "flex",
              alignContent: "center",
              columnGap: "45px",
            }}
          >
            <Link style={{ fontSize: "20px" }} to="/designart">
              {BsSearch()}{" "}
            </Link>
            <Link style={{ fontSize: "20px" }} to="/kids">
              {BsSuitHeart()} <span className="quantitydiv">10</span>
            </Link>
            <Link style={{ fontSize: "20px" }} to="/women">
              {BsFillBagFill()} <span className="quantitydiv">10</span>
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
}
