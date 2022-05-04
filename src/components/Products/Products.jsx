{
  /* import section*/
}
import styled from "styled-components";
import womenBanner from "../../assets/ProductPageImage/women_banner.webp";
import women_designer_banner_left from "../../assets/ProductPageImage/women_designer_banner_left.jpeg";
import women_designer_banner_right from "../../assets/ProductPageImage/women_designer_banner_right.webp";
import "./Products.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
{
  /* Products section*/
}
export const StyleM = styled.div`
  .slick-arrow {
    background-color: rgb(51, 51, 51);
    padding: 30px;
    border-radius: 30px;
    margin: 0px;
    z-index: 2;
    background-image: url("");
  }
  .slick-prev:before,
  .slick-next:before {
    /* content:${()=> {return (<ArrowBackIcon/>)}}; */
    font-family: "slick";
    font-size: 25px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    opacity: 0.75;
    color: white;
  }
  .slick-disabled {
    background-color: rgba(255, 255, 255, 0);
  }

`;
export const Products = () => {
  var settings = {
    className: "center",
    centerPadding: "60px",
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="products">
      {/* offer section*/}
      {true ? (
        <div className="offer">
          <div className="offerTitleOne">30% OFF LUXE FOR LESS</div>
          <div className="offerTitleTwo">Ends 5/2</div>
        </div>
      ) : null}

      {/* banner section*/}

      <img className="banner" src={`${true ? womenBanner : null}`}></img>
      {/*  Designer  & NEW ARRIVALS section*/}
      <div className="designer-newArrivals">
        {/*  Designer  section*/}
        <div className="designerSection">
          <div className="designerLeftSection">
            <img
              className="designerLeftImage"
              src={`${true ? women_designer_banner_left : null}`}
            ></img>

            <div className="titleOne">{true ? "FANCY FOOTWORK" : null}</div>
            <div className="titleTwo">
              {true ? "Find the most fabulous shoes here" : null}
            </div>
            <Link className="btn" to="###">
              SHOP NOW
            </Link>
          </div>
          <div className="designerMiddleSection">
            <div className="middle-title">DESIGNERS</div>
            <Link className="btn" to="###">
              J BRAND
            </Link>
            <Link className="btn" to="###">
              DOLCE & GABBANA
            </Link>
            <Link className="btn" to="###">
              ROBERTO CAVALLI
            </Link>
            <Link className="btn" to="###">
              MARNI
            </Link>
            <Link className="btn" to="###">
              STELLA MCCARTNEY
            </Link>
            <Link className="btn" to="###">
              MAISON MARGIELA
            </Link>
            <Link className="btn" to="###">
              VERSACE
            </Link>
            <Link className="btn" to="###">
              BALENCIAGA
            </Link>
            <Link className="btn" to="###">
              CHLOÉ
            </Link>
            <Link className="btn" to="###">
              GUCCI
            </Link>
            <Link className="btn-view" to="###">
              VIEW ALL
            </Link>
          </div>
          <div className="designerRightSection">
            <img
              className="designerRightImage"
              src={`${true ? women_designer_banner_right : null}`}
            ></img>
            <div className="titleOne">{true ? "BEST DRESSED" : null}</div>
            <div className="titleTwo">
              {true
                ? "Take your style to the next level with these chic pieces"
                : null}
            </div>
            <Link className="btn" to="###">
              SHOP NOW
            </Link>
          </div>
        </div>

        {/*   NEW ARRIVALS  section*/}
        <Slider {...settings} className="slider">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e,i) => {
            return (
              <div key={i}>

                <div className="slider-products-ux" >{e}</div>

               

              </div>
            );
          })}
        </Slider>
       
      </div>
    </div>
  );
};

