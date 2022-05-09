import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistData } from '../../redux/wishlistpage/action';
import "./Wishlist.css";
export function Whislist1() {
  const wishlistData = useSelector((store) => store.wishlist.wishlistData);
  const dispatch = useDispatch();
  const deleteProduct = (value) => {
    axios
      .delete(`https://yooxapi.herokuapp.com/wishlistData/${value}`)
      .then(() => dispatch(getWishlistData()));
  };
  const useridData = JSON.parse(localStorage.getItem("userIdyoox"));
  function Addtocart(value1) {
    fetch("https://yooxapi.herokuapp.com/cartData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: value1,
        useId: useridData,
      }),
    }).then(() => alert("Add to Shopping Box Sucessfully"));
  }
  return (
    <div className="second">
      {wishlistData.map((item) => (
        <div key={item.productId.id} className="mapp">
          <img className="imgwish" src={item.productId.img[0]} alt="" />
          <h5>{item.productId.name}</h5>
          <p>$ {item.productId.finalPrice}</p>
          <h5>Size: {item.productId.size[0]}</h5>
          <p>{item.productId.category[0]}</p>
          <button onClick={() => {
            Addtocart(item.productId._id);
          }}>ADD TO SHOPPING BAG</button>
          <button
            onClick={() => {
              deleteProduct(item._id);
            }}
          >
            REMOVE ITEM
          </button>
        </div>
      ))}
    </div>
  );
}
