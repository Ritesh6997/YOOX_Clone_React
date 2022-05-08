import React from 'react'
import Counter from './counter'
import "./cart.css";
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
export default function Cart1() {
  const CartData = useSelector((store) => store.cart.Cartdata);
  console.log(CartData,"cartDara");
  return (
    <div>
      {CartData.map((el) => (
        <div className="flexdiv cartCard">
          <div className="flexdiv">
            <img
              style={{ width: "100px", height: "100px", marginRight: "10px" }}
              src={`${el.productId.img[0]}`}
              alt=""
            />
            <div className="flexdivC">
              <span>{el.productId.name}</span>
              <span>{el.productId.type}</span>
              <span>LIMITED AVAILABILITY</span>
            </div>
          </div>
          <div >{el.productId.colorName}</div>
          <Counter value1={el.count} value2={el._id}></Counter>
          <div style={{ display: "flex", columnGap: "10px" }}>
            <div className="flexdivC">
              <span style={{ textDecoration: "line-through" }}>
                ${el.productId.initialPrice}
              </span>
              <span>${el.productId.finalPrice}</span>
            </div>
            <div>
              <span>
                {Math.round(
                  ((el.productId.initialPrice - el.productId.finalPrice) /
                    el.productId.initialPrice) *
                    100
                )}
                % OFF
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
