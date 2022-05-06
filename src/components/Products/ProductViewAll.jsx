import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProduct, sortProduct } from "../../redux/product/action";
import "./ProductViewAll.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
export const ProductViewAll = () => {
  const nav=useNavigate()
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProduct("men"));
  // }, []);
    function sortHandler(e) {
   dispatch(sortProduct(e.target.value));
}
  const ProductData = useSelector((store) => {
    return store.product.productData;
  });
  console.log("ProductData:", ProductData);
    return (<div>
        
        <div className="sorting-prt">
            <div><span className="bold-prt">SAVE SEARCH</span> View your saved searches</div>
            <div>{ `${ProductData.length}+ items`}</div>
            <div >
                <select  className="sort-prt" onChange={sortHandler}>
                    <option  className="srt-option">SORT BY</option>
                    <option  className="srt-option" value="high" >HIGHEST PRICE</option>
                    <option  className="srt-option"  value="low">LOWEST PRICE</option>
                  
                </select>
            </div>
</div>
      <div className="all-product">
          
      {ProductData.map((e) => {
        const { name, type, initialPrice, finalPrice, img, _id, size } = e;
        function convert(a, b) {
          const x = +a;
          const y = +b;
          return ((x - y) / x) * 100;
        }
        return (
          <div  className="prt-div" key={_id}>
            <img src={img}></img>
            <div className="view">
              < VisibilityOutlinedIcon className="view-icon" onClick={ ()=>{ nav(`/product/${_id}`)}}/>
              <FavoriteBorderOutlinedIcon className="love-icon" onClick={ ()=>{ addWishList(_id)}}/>
            </div>
            <div className="prt-name">{name}</div>
            <div className="prt-type">{type}</div>
            {initialPrice != "" ? (
              <div className="prt-dis">
                <div className="prt-initialPrice">{`$ ${initialPrice}`}</div>
                <div className="prt-dis-price">{`${Math.floor(
                  convert(initialPrice, finalPrice)
                )} % OFF`}</div>
              </div>
            ) : (
              <div className="ety"></div>
            )}
            <div className="prt-finalPrice">{` $ ${finalPrice}`}</div>
          </div>
        );
      })}
        </div>
        </div>
  );
};
