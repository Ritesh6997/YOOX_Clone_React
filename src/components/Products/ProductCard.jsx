import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export function ProductCard({ e }) {
  const nav=useNavigate()
  const { name, type, initialPrice, finalPrice, img, id } = e;
  function convert(a,b)
  {
    const x = +(a);
    const y = +(b);
    return ((x - y) / x) * 100;
}
  return (

    <div onClick={() => {
      nav(`/product/${id}`)
   }} >
     
        <img className="product-card-img" src={img[0]} ></img>
        <div className="product-name">{name}</div>
        <div className="product-type">{type}</div>
        {initialPrice != "" ? (
          <div className="product-dis" >
            <div className="product-initial-price">{initialPrice}</div>
            <div className="product-dis-price">{`$ ${Math.floor( convert(initialPrice,finalPrice))} % OFF`}</div>
          </div>
        ) : <div  className="ety"></div>}
        <div className="product-final-price">{`$ ${finalPrice}`}</div>
   
    </div>
  );
}
