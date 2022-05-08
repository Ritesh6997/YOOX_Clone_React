import React, { useState } from 'react'

export function Promocode({handlecode1}) {
    const [promocode, setpromocode] = useState("");
    function setcode(e) {
        setpromocode(e.target.value);
    }
    console.log(promocode);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        padding: "10px 80px",
        fontSize:"20px"
      }}
    >
      Enter Promocode
      <input
        style={{
          backgroundColor: "whitesmoke",
          padding: "10px",
          margin: "10px 0px",
        }}
        onChange={setcode}
        type="text"
        placeholder="ENTER PROMOCODE"
      />
          <button
              style={{backgroundColor:"black",color:"white",padding:"10px 30px"}}
        onClick={() => {
          handlecode1(promocode);
        }}
      >
        Apply
      </button>
    </div>
  );
}
