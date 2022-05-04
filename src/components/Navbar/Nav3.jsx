import React from 'react'
import { Box, } from '@chakra-ui/react';
import { Link } from "react-router-dom"
export default function Nav3() {
  const arr=["NEW" ,"ARRIVALS", "DESIGNERS" ,"CLOTHING", "SHOES", "ACCESSORIES & BAGS", "8 BY YOOX" ,"YOOXYGEN" ,"COLLABORATIONS", "BEST", "OFFERS"]
  return (
    <div>
      <div>
        <Box
          w="100%"
          h="35px"
          borderBottom={"1px solid #c7c1c1"}
          bgGradient="linear(to-t, green.200, pink.500)"
          bg="black"
          color={"white"}
          fontSize={11}
          fontWeight={"510"}
          fontFamily={"Montserrat,sans-serif"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          columnGap={"10px"}
          
        >
          {arr.map((e) => (
            <Link  to="/Home">{e}</Link>
          ))}
        </Box>
      </div>
    </div>
  );
}
