import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RiArrowRightSLine
      className={className}
      style={{
        ...style,
        color: "white",
        width: "30px",
        height: "46px",
      
      }}
      onClick={onClick}
    />
  );
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RiArrowLeftSLine
      className={className}
      style={{
        ...style,
        color: "white",
        width: "30px",
        height: "46px",
     
      }}
      onClick={onClick}
    />
  );
};
