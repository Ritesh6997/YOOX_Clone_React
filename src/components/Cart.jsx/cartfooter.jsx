import React from 'react'

export default function Cartfooter() {
  return (
      <div style={{
          marginTop:"5%",
          padding: "10px  16%",
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          fontSize:"15px",
        fontWeight:"bold"          
    }}>
      <div className="disflexdiv">
        <span>TOTAL FOR ITEMS</span>
        <span>$ 540.00</span>
      </div>

      <div className="disflexdiv">
        <span>SHIPPING</span>
        <span>Free</span>
      </div>

      <div className="disflexdiv">
        <span>PAYMENT</span>
        <span>Free</span>
      </div>

      <div className="disflexdiv">
        <span>ORDER TOTAL</span>
        <span>$ 540.00</span>
      </div>
    </div>
  );
}
