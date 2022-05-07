// Import css files
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./carousalComponent/ArrowMain";
import "./Hero.css"
import sl1 from "../img/sli1f.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;

const Hero = () => {
        const settings = {
          infinite: false,
          speed: 500,
          lazyLoad: "ondemand",
          slidesToShow: 5,
          slidesToScroll: 5,

          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ],
        };

    const EntertainmentImage = [
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1
      
      
    ];
  
    
  return (
    <Slider {...settings} className="poc">
      {EntertainmentImage.map((image) => {
        return (
          <div>
            <img src={image} alt="" style={{ width: "200px" }} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Hero