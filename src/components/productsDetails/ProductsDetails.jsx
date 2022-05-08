import React, { useEffect, useState } from "react";
import "./ProductsDetails.css";
import infoPNG from "../../img/info.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductsDetails = () => {
  const [idImg, setImg] = useState(0);
  const useridData = JSON.parse(localStorage.getItem("userIdyoox"));
  
    function Addtocart() {
    fetch("https://yooxapi.herokuapp.com/cartData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: proData._id,
        useId: useridData,
      }),
    });
    
  };

  function Addtowishlist() {
    axios
      .post(`https://yooxapi.herokuapp.com/wishlistData`, {
        useId: `${useridData}`,
        productId: `${proData._id}`,
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  const product = useSelector((store) => store.product.productData);
  console.log(product, "product Data");
  const [proData, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    for (let i = 0; i < product.length; i++) {
      if (id === product[i]._id) {
        setData(product[i]);
      }
      
    }
    }, []);
console.log(proData);

  
  const IMG = ({ src, index }) => {
    return (
      <>
        <img className={`iamge${index}`} src={src} alt="" />
      </>
    );
  };

  return (
    <div className="product-details-container">
      <div className="product-details-left">
        <div className="main-image-display">
          {proData.img? <img  src={proData.img[idImg]} alt="" />:""}
          
        </div>
        <div className="sub-image-display">
          {proData.img? proData.img.map((item, index) => {
            return (
              <div
                className={`sub-imgs${idImg}`}
                key={index}
                onClick={() => setImg(index)}
              >
                <IMG src={item} index={index} />
              </div>
            );
          }):""}
        </div>
      </div>
      <div className="product-details-right">
        <div className="product-text">
          <h3>{ proData.name}</h3>
          <p>{ proData.type}</p>
        </div>
        <div className="product-price">
          <div className="show-actual-discount">
            <span className="show-actual-discountspan">
              US$ {proData.initialPrice}
            </span>
            <p>
              {Math.floor(
                (100 * (proData.initialPrice - proData.finalPrice)) /
                  proData.initialPrice
              )}
              % OFF
            </p>
            <img className="show-actual-discountimg" src={infoPNG} />
          </div>
          <div className="show-actual-price">
            <h3 className="show-actual-priceh3">US$ {proData.finalPrice}</h3>
          </div>
        </div>
        <div className="show-color">
          <p>{proData.colorName ? `${proData.colorName}` :""}</p>
          {proData.color? 
              <div>
                <span style={{ backgroundColor: proData.color }}></span>
              </div>
            :""}
        </div>
        <div className="pdt-size">
          {proData.size? proData.size.map((iten) => {
            return <div className="pdt-sizediv">{iten}</div>;
          }):""}
        </div>
        <div className="addto-bag-btn">
          <button onClick={() => {
            Addtocart();
          }} >ADD TO SHOPPING BAG</button>
          <button onClick={() => {
            Addtowishlist();
          }}>ADD TO DREAM BOX</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
