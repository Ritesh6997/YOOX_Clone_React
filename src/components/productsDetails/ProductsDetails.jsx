import React, { useState } from "react";
import "./ProductsDetails.css";
import infoPNG from "../../img/info.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ProductsDetails = () => {
  const [idImg, setImg] = useState(0);
  var data = {
    name: "SALVATORE FERRAGAMO",
    type: "Laced shoes",
    initialPrice: "961.00",
    finalPrice: "393.00",
    color: ["#85b09a"],
    colorName: "Sage green",
    size: ["6.5", "7"],
    category: ["men", "shoes"],
    img: [
      "https://www.yoox.com/images/items/17/17151065SF_14_f.jpg?impolicy=crop&width=387&height=490",
      "https://www.yoox.com/images/items/17/17151065SF_14_r.jpg?impolicy=crop&width=387&height=490",
      "https://www.yoox.com/images/items/17/17151065SF_14_d.jpg?impolicy=crop&width=387&height=490",
      "https://www.yoox.com/images/items/17/17151065SF_14_e.jpg?impolicy=crop&width=387&height=490",
    ],
  };

console.log("DDDDDDDDDDDDDDDDDDDDDdd");
  const product = useSelector(store => store.product.productData);
  console.log(product, "product Data");
  const {id}=useParams()
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
          <img src={data.img[idImg]} alt="" />
        </div>
        <div className="sub-image-display">
          {data.img.map((item, index) => {
            return (
              <div className={`sub-imgs${idImg}`} key={index} onClick={() => setImg(index)}>
                <IMG src={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="product-details-right">
        <div className="product-text">
          <h3>MAISON NAGIELA</h3>
          <p>Laced Shoes</p>
        </div>
        <div className="product-price">
          <div className="show-actual-discount">
            <span>US$ {data.initialPrice}</span>
            <p>{Math.floor((100 * (data.initialPrice - data.finalPrice)) / data.initialPrice)}% OFF</p>
            <img src={infoPNG} />
          </div>
          <div className="show-actual-price">
            <h3>US$ 790</h3>
          </div>
        </div>
        <div className="show-color">
          <p>{data.colorName}</p>
          {data.color.map((color) => {
            return (
              <div>
                <span style={{ backgroundColor: color }}></span>
              </div>
            );
          })}
        </div>
        <div className="pdt-size">
          {data.size.map((iten) => {
            return <div>{iten}</div>;
          })}
        </div>
        <div className="addto-bag-btn">
          <button>ADD TO SHOPPING BAG</button>
          <button>ADD TO DREAM BOX</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
