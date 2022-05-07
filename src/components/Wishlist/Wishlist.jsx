import React, { useEffect } from "react";
import "./Wishlist.css";
import { useState } from "react";
import axios from "axios";

export const Wishlist = () => {
  const [data, setData] = useState([]);
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
        <h2>DREAM BOX{}</h2>
        <p>
          Keep an eye on the items that you love the most, and don't miss out on
          your last chance to buy them
        </p>
      </div>
      <div className="scnd_name">
        <div className="firstBox">
          <h1>SHOPPING WEEKEND</h1>
          <h1>20% OFF</h1>
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
                <img src={item.img} alt="" />
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
