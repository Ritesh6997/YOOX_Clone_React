import React, { useEffect } from "react";
import "./Wishlist.css";
import { getWishlistData } from "../../redux/wishlistpage/action";
import { useDispatch, useSelector } from "react-redux";
import {Whislist1} from "./whislist1";
export const Wishlist = () => {
  const WishlistData = useSelector((store) => store.wishlist.wishlistData);
  console.log(WishlistData,"whsh");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(1)
    dispatch(getWishlistData());
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
          <Whislist1></Whislist1>
        </div>
      </div>
    </div>
  );
};
