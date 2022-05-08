import React, { useEffect, useState } from "react";
import "./DesignComponent.css";
import l1 from "../img/l1.png";
import l2 from "../img/l2.png";
import l3 from "../img/l3.png";
import left2 from "../img/giff.webp";
import left1 from "../img/left1.png";
import right1 from "../img/right1.png";
import banner from "../img/design-banner.png";
import Hero from "./Hero";
import axios from "axios";
  console.log("PRATHYU");

const DesignComponent = () => {
  const [data,setData] =useState([])
  useEffect(() => {
    getData();
  }, []);
  // function getData ()  {
  //   axios
  //     .get("https://yooxapi.herokuapp.com/products/design")
  //     .then(function (response) {
  //       // handle success
  //       console.log("response");
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };
   const getData = () => {
     fetch("https://yooxapi.herokuapp.com/products/design")
       .then((d) => d.json())
       .then((data) => {
         setData(data)
         console.log("DATA");
       });
   };
   console.log('ffffffff',data);

  return (
    <>
      <div className="design-container">
        <div className="design-landing">
          <div className="landing1">
            <img src={l1} alt="" />
            <img src={l2} alt="" />
          </div>
          <div className="landing2">
            <h1 className="quotes">¿Tres cualidades para ser creativos? ¡La curiosidad, la visión y la iniciativa!</h1>
            <span></span>
            <p>Nina Yashar</p>
          </div>
          <div className="landing3">
            <img src={l3} alt="" />
            <h3>UNIQUE TOUCH</h3>
            <p>Trcnicas artesanales y un togu de magia</p>
          </div>
          <div className="landing4">
            <div className="left">
              <img src={left1} alt="" />
              <div className="landing4-left-img2">
                <img src={left2} alt="" />
                <h2>PICKED BY NINA X YOOX</h2>
                <p>An unprecedented project of collectible design</p>
              </div>
            </div>
            <div className="right">
              <img src={right1} alt="" />
            </div>
          </div>
        </div>
        <div className="carousal">
          <Hero />
        </div>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default DesignComponent;
