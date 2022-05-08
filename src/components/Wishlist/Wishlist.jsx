import React, { useEffect } from "react";
import "./Wishlist.css";
import { useState } from "react";
import axios from "axios";

export const Wishlist = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const delectsdata="something"
  const deleteProduct = (value) => {
    console.log(value);
  axios.delete(`https://yooxapi.herokuapp.com/wishlistData/${value}`)
    .then(() => getData() );
    console.log(1);
  };
const useridData = JSON.parse(localStorage.getItem("userIdyoox"));
  useEffect(() => {
    getData();
  }, []);
  function getData(){
    axios
      .get(`https://yooxapi.herokuapp.com/wishlistData/${useridData}`)
      .then((res) => {
        console.log(res.data.wishlistData);
        setData([...res.data.wishlistData]);
      });
  }
  return (
    <div>
      <div className="drmbox">
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>DREAM BOX</h2>
        <p className="drmboxp">
          Keep an eye on the items that you love the most, and don't miss out on
          your last chance to buy them
        </p>
      </div>
      <div className="scnd_name">
        <div className="firstBox">
          <h1 style={{ fontWeight: "500", fontSize: "40px" }}>
            SHOPPING WEEKEND
          </h1>
          <h1 style={{ fontWeight: "bolder", fontSize: "40px" }}>20% OFF</h1>
          <h2>Markdown applied in Shopping Bag</h2>
        </div>
        <div className="secondBox">
          <div className="first">
            <div>FAVOURITE ITEM</div>
            <div>MANAGE NOTIFICATION</div>
          </div>
          <div className="second">
            {data.map((item) => (
              <div key={item.productId.id} className="mapp">
                <img className="imgwish" src={item.productId.img[0]} alt="" />
                <h5>{item.productId.name}</h5>
                <p>{item.productId.finalPrice}</p>
                <h5>{item.productId.size[0]}</h5>
                <p>{item.productId.category[0]}</p>
                <button>ADD TO SHOPPING BAG</button>
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
        </div>
      </div>
    </div>
  );
};
