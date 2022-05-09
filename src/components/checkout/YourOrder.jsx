import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const Order = ()=>{
    const CartData = useSelector((store) => store.cart.Cartdata);
    console.log(CartData);
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=>{

        let total = 0;
        CartData.map((e) => {
          total = total + +e.productId.finalPrice;

          return total;
        });

       setTotalPrice(total)
       
    },[])

   

    return (
      <div className="orderContainer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="checkoutHeading" style={{ paddingTop: "40px" }}>
            Your order
          </div>
          <div
            style={{
              color: "rgb(102, 102, 102)",
              fontSize: "13px",
              paddingTop: "40px",
              marginTop: "7px",
              marginRight: "10px",
            }}
          >
            {CartData.length} items
          </div>
        </div>

        <div className="orderSubTitles">TOTAL FOR ITEMS</div>
        <div className="orderPrices">US$ {totalPrice}.00</div>

        <div className="orderSubTitles">SHIPPING</div>
        <div className="orderPrices">Express 3-6 business days</div>

        <div className="orderSubTitles">SHIPPING COSTS</div>
        <div className="orderPrices">US$ 26,00</div>

        <div className="orderSubTitles">LOCAL TAXES AND DUTIES</div>
        <div className="orderPrices">US$ 78,03</div>

        <div className="orderSubTitles">ORDER TOTAL</div>
        <span className="totalPrice">US$ {totalPrice + 26 + 78},00</span>

        <hr style={{ width: "275px" }} />

        <div className="orderSubTitles">YOU ARE PURCHASING:</div>

        <div
          style={{ height: "350px", marginLeft: "30px", overflow: "scroll" }}
        >
          {CartData.map((e, id) => (
            <div style={{ display: "flex", marginTop: "30px" }}>
              <div>
                <img
                  src={e.productId.img[0]}
                  alt=""
                  style={{ width: "93px", marginTop: "-10px" }}
                />
              </div>
              <div>
                <div className="dressname">{e.productId.name}</div>
                <div className="dressdetails">{e.productId.type}</div>
                <div className="dressdetails">{e.productId.colorName}</div>
                <div className="dressdetails">{e.productId.size[0]}(INT)</div>
                <div className="dressdetails">Quantity: 1</div>
                <div className="dressPrice">US$ {e.productId.finalPrice}</div>
              </div>
            </div>
          ))}
        </div>

        <hr />
      </div>
    );
}