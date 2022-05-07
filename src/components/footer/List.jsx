import React from 'react'
import "./footer.css";
import { v4 as uuidv4 } from "uuid";
export default function List({data}) {

  return (
    <div className="flexdiv flexdirC" style={{ display: "inline-flex", width: "130px", fontSize: "14px",fontWeight:"500",rowGap:"10px"}}>
      <hr />
      {data.map((e) => (
        <span key={uuidv4()}>{e}</span>
      ))}
    </div>
  );
}
