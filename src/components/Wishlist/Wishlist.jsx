import React, { useEffect } from "react";
import "./Wishlist.css";
import { useState } from "react";
import axios from "axios";

export const Wishlist = () => {
  useEffect(() => {
    axios.get(
      "https://yooxapi.herokuapp.com/wishlistData/62761ff369dd7bab53b8b50c"
    );
  },[])
  const [data, setData] = useState([{
    "name": "SALVATORE FERRAGAMO",
    "type": "Laced shoes",
    "initialPrice": "961.00",
    "finalPrice":"393.00" ,
    "color":["#85b09a"] ,
    "colorName":"Sage green",
    "size":["6.5","7"],
    "category": ["men","shoes"],
    "img" : ["https://www.yoox.com/images/items/17/17151065SF_14_f.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/17/17151065SF_14_r.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/17/17151065SF_14_d.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/17/17151065SF_14_e.jpg?impolicy=crop&width=387&height=490"]
  },
  {
    "name": "SALVATORE FERRAGAMO",
    "type": "Laced shoes",
    "initialPrice": "961.00",
    "finalPrice":"393.00" ,
    "color":["#85b09a"] ,
    "colorName":"Sage green",
    "size":["6.5","7"],
    "category": ["men","shoes"],
    "img" : ["https://www.yoox.com/images/items/17/17151065SF_14_f.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/17/17151065SF_14_r.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/17/17151065SF_14_d.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/17/17151065SF_14_e.jpg?impolicy=crop&width=387&height=490"]
}]);
  console.log(data);
  
  const deleteProduct = (id) => {
    const fltr = data.filter((i) => {
      return i.id !== id;
    });

    axios.delete(`http://localhost:8080/data/${id}`);
    setData(fltr);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      //   console.log(res.data);
      setData(res.data);
    });
  }, []);

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
              <div key={item.id} className="mapp">
                <img className="imgwish" src={item.img[0]} alt="" />
                <h5>{item.name}</h5>
                <p>{item.finalPrice}</p>
                <h5>{item.size[0]}</h5>
                <p>{item.category[0]}</p>
                <button>ADD TO SHOPPING BAG</button>
                <button
                  onClick={() => {
                    deleteProduct(item.id);
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
