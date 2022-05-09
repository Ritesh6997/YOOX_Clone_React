import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Cartsum } from '../../redux/Cartpage/action';
import { Promocode } from './promocode';

export default function Cartfooter() {
  const CartData = useSelector((store) => store.cart.Cartdata);
  const dispatch = useDispatch();
  let Totalprice = CartData.reduce((total, ele) => {
    return total + +ele.productId.finalPrice;
  }, 0);
  console.log(Totalprice,"totalprice");
  const [cartsum, setcartsum] = useState(Totalprice);
  useEffect(() => {
    setcartsum(Totalprice);
  },[Totalprice])
    const handlecode=(code) => {
    if (code === "MASAI30") {
      console.log("yes")
      setcartsum((prev) => (prev * (.70)));
      alert("Promocode is Applied Successfully")
    }
    else {
      alert( "Invalid Code")
    }
}
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
      <div>
        <Promocode handlecode1={handlecode}></Promocode>
      </div>
      <div className="disflexdiv">
        <span>TOTAL FOR ITEMS</span>
        <span>$ {cartsum}</span>
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
        <span>$ {cartsum}</span>
      </div>
    </div>
  );
}
