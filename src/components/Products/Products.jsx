{
  /* import section*/
}
import styled from "styled-components";
import womenBanner from "../../assets/ProductPageImage/women_banner.webp";
import women_designer_banner_left from "../../assets/ProductPageImage/women_designer_banner_left.jpeg";
import women_designer_banner_right from "../../assets/ProductPageImage/women_designer_banner_right.webp";
import women_showcase_banner_left from "../../assets/ProductPageImage/women_showcase_banner_left.webp";
import women_showcase_banner_middle from "../../assets/ProductPageImage/women_showcase_banner_middle.webp";
import women_showcase_banner_right from "../../assets/ProductPageImage/women_showcase_banner_right.webp";
import women_footer_banner_left from "../../assets/ProductPageImage/women-footer-banner-left.jpg";
import women_footer_banner_right from "../../assets/ProductPageImage/women-footer-banner-right.jpg";
import women_ad_banner from "../../assets/ProductPageImage/women-ad-banner.webp";
import kids_ad_banner from "../../assets/ProductPageImage/kids-ad-banner.webp";


import menBanner from "../../assets/ProductPageImage/men_banner.webp";
import men_designer_banner_left from "../../assets/ProductPageImage/men_designer_banner_left.webp";
import men_designer_banner_right from "../../assets/ProductPageImage/men_designer_banner_right.webp";
import men_showcase_banner_left from "../../assets/ProductPageImage/men_showcase_banner_left.webp";
import men_showcase_banner_middle from "../../assets/ProductPageImage/men_showcase_banner_middle.webp";
import men_showcase_banner_right from "../../assets/ProductPageImage/men_showcase_banner_right.webp";


import kidsBanner from "../../assets/ProductPageImage/kids_banner.webp";
// import men_designer_banner_left from "../../assets/ProductPageImage/men_designer_banner_left.webp";
// import men_designer_banner_right from "../../assets/ProductPageImage/men_designer_banner_right.webp";
import kids_showcase_banner_left from "../../assets/ProductPageImage/kids_showcase_banner_left.jpeg";
import kids_showcase_banner_middle from "../../assets/ProductPageImage/kids_showcase_banner_middle.webp";
import kids_showcase_banner_right from "../../assets/ProductPageImage/kids_showcase_banner_right.webp";


import "./Products.css";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useState} from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { KidDesigner } from "./Kid_Designer";
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
  var settings1 = {
    className: "center",
    centerPadding: "60px",
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { name } = useParams()
  const [page, setPage] = useState(name)
 

  // setPage(name)
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
      <div className="banner-section">
      <img className="banner" src={`${page=="women" ? womenBanner : page=="men"?menBanner:kidsBanner}`}></img>
      <div className="footer-post-left">
        <div className="titleOne">{page=="women" ? "WONDERFUL WEDDINGS"  :page=="men"?"WONDERFUL WEDDINGS":`LET’S PARTY!`}</div>
            <div className="titleTwo">
              {page=="women"
                ? "Celebrate love in style!"
                :page=="men"?"Celebrate love in style!":`Festive looks for the littlest guests`}
          </div>
          <div className="ad-banner-btn">
            <Link className="btn" to="###">
            SHOP GIRLS
            </Link>
            <Link className="btn" to="###">
            SHOP BOYS
            </Link>
            </div>
        </div>
        </div>
      {/*  Designer  & NEW ARRIVALS section*/}
      <div className="designer-newArrivals">
        {/*  Designer  section*/}
        
{page=="kids"?null:<div className="designerSection">
          <div className="designerLeftSection">
            <img
              className="designerLeftImage"
              src={`${page=="women" ? women_designer_banner_left :page=="men"?men_designer_banner_left:null}`}
            ></img>

            <div className="titleOne">{page=="women" ? "FANCY FOOTWORK":page=="men"?"FANCY FOOTWORK":null}</div>
            <div className="titleTwo">
              {page=="women" ? "Find the most fabulous shoes here" :page=="men"?"Find the most fabulous shoes here":null}
            </div>
            <Link className="btn" to="###">
              SHOP NOW
            </Link>
          </div>
          <div className="designerMiddleSection">
            <div className="middle-title">DESIGNERS</div>
            <Link className="btn" to="###">
              {page=="women" ? "J BRAND":"JACQUEMUS"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "DOLCE & GABBANA":"VANS"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "ROBERTO CAVALLI":"DSQUARED2"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "MARNI":"DOLCE & GABBANA"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "STELLA MCCARTNEY":"ROBERTO CAVALLI"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "MAISON MARGIELA":"MAISON MARGIELA"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "VERSACE":"BALENCIAGA"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "BALENCIAGA":"VERSACE"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "CHLOÉ":"GUCCI"}
            </Link>
            <Link className="btn" to="###">
              {page=="women" ? "GUCCI":"CALVIN KLEIN"}
            </Link>
            <Link className="btn-view" to="###">
              VIEW ALL
            </Link>
          </div>
          <div className="designerRightSection">
            <img
              className="designerRightImage"
              src={`${page=="women" ?  women_designer_banner_right  :page=="men"?men_designer_banner_right :null}`}
              
            ></img>
            <div className="titleOne">{page=="women"? "BEST DRESSED" : page=="men"?"SWEATSHIRTS, T-SHIRTS & MORE" :null}</div>
            <div className="titleTwo">
              {page=="women"
                ? "Take your style to the next level with these chic pieces"
                :page=="men"?"What will you pick?":null}
            </div>
            <Link className="btn" to="###">
              SHOP NOW
            </Link>
          </div>
        </div>}
        {/*   NEW ARRIVALS  section*/}
        
        {page=="kids"?<><div className="slider-title-top">NEW ARRIVALS GIRLS</div>
        <Link to="###" className="slider-title-bottom"> VIEW ALL</Link>
        <Slider {...settings} className="slider">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e,i) => {
            return (
              <div key={i}>

                <div className="slider-products" >{e}</div>
              </div>
            );
          })}
          </Slider>
          <div className="slider-title-top">NEW ARRIVALS BOYS</div>
        <Link to="###" className="slider-title-bottom"> VIEW ALL</Link>
        <Slider {...settings} className="slider">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e,i) => {
            return (
              <div key={i}>
                <div className="slider-products" >{e}</div>


              </div>
            );
          })}
        </Slider>
        </> : <><div className="slider-title-top">NEW ARRIVALS</div>
        <Link to="###" className="slider-title-bottom"> VIEW ALL</Link>
        <Slider {...settings} className="slider">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e,i) => {
            return (
              <div key={i}>
                <div className="slider-products" >{e}</div>
              </div>
            );
          })}
          </Slider></>}
         {page=="kids"?<KidDesigner/>:null} 
   
      </div>
      
      {/*   showcase banner section*/}
      <div className="showcase-banner">
        <Link to="###" className="showcase-banner-left">
        <img
              
              src={`${page=="women" ?women_showcase_banner_left :page=="men"?men_showcase_banner_left:kids_showcase_banner_left}`}
            ></img>
            <div className="titleOne">{page=="women" ? "VANS" :page=="men"?"VANS":"IL GUFO"}</div>
            <div className="titleTwo">
              {page=="women"
                ? "Iconic models and details"
                :page=="men"?"Iconic models and details":"Outdoor adventures"}
          </div>
          {page=="kids"?<div className="kids-btn">
            <Link className="btn" to="###">
            SHOP GIRLS
            </Link>
            <Link className="btn" to="###">
            SHOP BOYS
            </Link>
            </div>:null}
        </Link>
        <Link to="###" className="showcase-banner-middle">
        <img
              
              src={`${page=="women" ?women_showcase_banner_middle :page=="men"?men_showcase_banner_middle:kids_showcase_banner_middle}`}
            ></img>
            <div className="titleOne">{true ? "KARL LAGERFELD" : null}</div>
            <div className="titleTwo">
              {true
                ? "Inspiration comes from Nature"
                : null}
          </div>
          {page=="kids"?<div className="kids-btn">
            <Link className="btn" to="###">
            SHOP GIRLS
            </Link>
            <Link className="btn" to="###">
            SHOP BOYS
            </Link>
            </div>:null}
        </Link>
        <Link to="###" className="showcase-banner-right">
        <img
                
              src={`${page=="women"  ?women_showcase_banner_right:page=="men"?men_showcase_banner_right:kids_showcase_banner_right}`}
            ></img>
            <div className="titleOne">{page=="women" ? "& other stories" :page=="men"?"POLO RALPH LAUREN":"STELLA MCCARTNEY KIDS"}</div>
            <div className="titleTwo">
              {page=="women"
                ? "Time together…"
                :page=="men"?"Classics revisited with a vibrant twist":"Come play with us!"}
          </div>
          {page=="kids"?<div className="kids-btn">
            <Link className="btn" to="###">
            SHOP GIRLS
            </Link>
            <Link className="btn" to="###">
            SHOP BOYS
            </Link>
            </div>:null}
        </Link>
      </div>
              {/*   ONE OF A KIND  section*/}
        <div className='one-of-kind'>
              <div className="slider-title-top">ONE OF A KIND</div>
        <Link to="###" className="slider-title-bottom">VIEW ALL</Link>
        <Slider {...settings} className="slider">
          {[11, 12, 13, 14, 15, 16, 17, 18, 19].map((e,i) => {
            return (
              <div key={i}>
                <div className="slider-products" >{e}</div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/*  ad-banner  section*/}
      <div className="ad-banner">
        <img src={`${page=="kids" ? kids_ad_banner:women_ad_banner }`} ></img>
        <div className="footer-post-left">
        <div className="titleOne">{true ? "WHERE PEOPLE DANCE" : null}</div>
            <div className="titleTwo">
              {true
                ? "The new SS22 collection from 8 by YOOX"
                : null}
          </div>
          <div className="ad-banner-btn">
            <Link className="btn" to="###">
              SHOP NOW
            </Link>
            <Link className="btn" to="###">
            GET INSPIRED
            </Link>
            </div>
        </div>
        <div className="ad-banner-slider">
        <Slider {...settings1} className="slider1">
          {[11, 12, 13, 14, 15, 16, 17, 18, 19].map((e,i) => {
            return (
              <div key={i}>
                <div className="slider-products1" >{e}</div>
              </div>
            );
          })}
        </Slider>
       </div>
      </div>


         {/*  footer-banner  section*/}
      <div className="footer-banner">
      <img src={`${true ?women_footer_banner_left : null}`} ></img>
      <img src={`${true ?women_footer_banner_right: null}`} ></img>
        <div className="footer-post-left">
        <div className="titleOne">{true ? "UNIQUE TOUCH" : null}</div>
            <div className="titleTwo">
              {true
                ? "Artisanal techniques and bit of magic"
                : null}
            </div>
            <Link className="btn" to="###">
              SHOP NOW
            </Link>
        </div>
        <div className="footer-post-right">
        <div className="titleOne">{true ? "EARTH DAY, EVERY DAY" : null}</div>
            <div className="titleTwo">
              {true
                ? "Take care of the planet"
                : null}
            </div>
            <Link className="btn" to="###">
            CELEBRATE WITH US
            </Link>
        </div>
              
           
      </div>
    </div>
  );
};

