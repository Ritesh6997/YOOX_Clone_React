import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { Button, Input, Radio,RadioGroup,Stack } from "@chakra-ui/react";
import "./footer.css"
export default function Form() {
  return (
    <div>
      <div className="formF">
        <div
          style={{
            fontWeight: "bolder",
            fontFamily: "cursive",
            fontSize: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifySelf: "center",
            alignContent: "center",
          }}
        >
          <span style={{ padding: "0 40%", fontSize: "35px" }}>
            {MdOutlineEmail()}
          </span>
          YOOX NEWS
        </div>
        <p style={{ fontSize: "12px" }}>
          Sign up for the newsletter and discover the latest arrivals and
          promotions
        </p>
        <Input type="text" placeholder="Insert Your Email Address" />
        <RadioGroup display={"flex"} justifyContent={"center"} defaultValue="1">
          <Stack spacing={5} direction="row">
            <Radio colorScheme={"blue"} value="1">
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                WOMEN
              </span>
            </Radio>
            <Radio colorScheme="blue" value="2">
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>MEN</span>
            </Radio>
          </Stack>
        </RadioGroup>
        <div style={{ fontSize: "12px" }}>
          <input type="checkbox" name="" id="" />I consent to receive YOOX
          newsletters via email. For further information, please consult the
          Privacy Policy.
        </div>
        <button style={{backgroundColor:"black",color:"white",padding:"15px 5px",fontSize:"18px",fontWeight:"bold"}}>Submit</button>
      </div>
    </div>
  );
}
