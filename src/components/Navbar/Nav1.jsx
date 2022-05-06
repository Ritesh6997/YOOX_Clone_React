import React from 'react'
import { Box, } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { LockIcon, } from "@chakra-ui/icons";
import { BsFillPencilFill, BsPersonFill } from "react-icons/bs";
import { store } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthAction } from '../../redux/isAuth/action';
export default function Nav1() {
  // const isAuth = false;
  const isAuth = useSelector(store => store.isAuth.IsAuth);
  console.log(isAuth,store);
  const dispatch = useDispatch();
  
  console.log(isAuth);
  return (
    <div>
      <div>
        <Box
          w="100%"
          h="30px"
          m="auto"
          padding={"0 21%"}
          bgGradient="linear(to-t, green.200, pink.500)"
          bg="white"
          fontSize={10.5}
          fontWeight={"555"}
          fontFamily={"Montserrat,sans-serif"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          textDecoration={"underline"}
        >
          <div style={{ display: "flex", columnGap: "10px" }}>
            <Link to="/Home">INDIA</Link> <Link to="/">CUSTOMER CARE</Link>
          </div>

          <div
            onClick={() => dispatch(isAuthAction())}
            style={{ display: "flex", columnGap: "10px" }}
          >
            {!isAuth ? (
              <Link style={{ display: "flex" }} to="/Home">
                {BsFillPencilFill()} REGISTER{" "}
              </Link>
            ) : (
              <Link style={{ display: "flex" }} to="/Home">
                {BsPersonFill()} MYOOX{" "}
              </Link>
            )}
            {!isAuth ? (
              <Link to="/">
                <LockIcon></LockIcon> LOGIN{" "}
              </Link>
            ) : (
              <Link to="/">
                <LockIcon />
                LOGOUT{" "}
              </Link>
            )}
          </div>
        </Box>
        <hr border={"1px solid #c7c1c1"} />
      </div>
    </div>
  );
}
