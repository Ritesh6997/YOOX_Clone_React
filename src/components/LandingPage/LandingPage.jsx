import './LandingPage.css'
import { Link } from 'react-router-dom'
export const LandingPage=()=>{
    return (
      <div className="container">
        <div className="LandingPage_title">
          <img
            className="LandingPage_titleimg"
            src="https://mobile.yoox.com/media/yoox16/header/yoox-logo-p.svg"
          />
          <h3 className="LandingPage_titleh3">SHOP FASHION / DESIGN+ART</h3>
        </div>
        <div className="LandingPage_sub_div">
          <div className="LandingPage_sub_divdiv LandingPage_main">
            <Link to="/women" className="landing_poster">
              <img
                className="landing_posterimg"
                src="https://www.yoox.com/images/yoox80/banners/5569_23_splash_W.jpg?634485886601286852"
              />
            </Link>
            <div className="name LandingPage_sub_divdiv">
              <h3>WOMEN</h3>
            </div>
            <div className="view LandingPage_sub_divdiv">
              <h6 className="h6text" >[VIEW MORE]</h6>
            </div>
          </div>

          <div className="LandingPage_main">
            <Link to={"/men"} className="landing_poster">
              <img
                className="landing_posterimg"
                src="https://www.yoox.com/images/yoox80/banners/5569_22_splash_M.jpg?634485886601286852"
              />
            </Link>
            <div className="name">
              <h3>MEN</h3>
            </div>
            <div className="view">
              <h6 className="h6text">[VIEW MORE]</h6>
            </div>
          </div>

          <div className="LandingPage_main">
            <Link to={"/kids"} className="landing_poster">
              <img
                className="landing_posterimg"
                src="https://mobile.yoox.com/images/yoox80/banners/5569_17_splash_K.jpg?634485886601286852"
              />
            </Link>
            <div className="name">
              <h3>KIDS</h3>
            </div>
            <div className="view">
              <h6 className="h6text">[VIEW MORE]</h6>
            </div>
          </div>

          <div className="LandingPage_main">
            <Link to={"/designart"} className="landing_poster">
              <img
                className="landing_posterimg"
                src="https://mobile.yoox.com/images/yoox80/banners/5569_15_splash_D.jpg?634485886601286852"
              />
            </Link>
            <div className="name">
              <h3>DESIGN+ART</h3>
            </div>
            <div className="view">
              <h6 className="h6text">[VIEW MORE]</h6>
            </div>
          </div>
        </div>
      </div>
    );
}