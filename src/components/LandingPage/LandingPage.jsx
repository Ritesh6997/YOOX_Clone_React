import './LandingPage.css'
export const LandingPage=()=>{
    return (
        <div className="container" >
        <div className="LandingPage_title" >
            <img  src="https://mobile.yoox.com/media/yoox16/header/yoox-logo-p.svg" />
            <h3>SHOP FASHION / DESIGN+ART</h3>
        </div>
        <div className="LandingPage_sub_div" >
         <div className="LandingPage_main">
             <div className="landing_poster" >
                <img src="https://www.yoox.com/images/yoox80/banners/5569_23_splash_W.jpg?634485886601286852" />
             </div>
             <div className="name" >
                 <h3>WOMEN</h3>
             </div>
             <div className="view" >
             {/* <a href="">[VIEW MORE]</a> */}
             <h6>[VIEW MORE]</h6>
             </div>

         </div>

         <div className="LandingPage_main">
             <div className="landing_poster" >
                <img src="https://www.yoox.com/images/yoox80/banners/5569_22_splash_M.jpg?634485886601286852" />
             </div>
             <div className="name" >
                 <h3>MEN</h3>
             </div>
             <div className="view" >
                 {/* <a href="">[VIEW MORE]</a> */}
                 <h6>[VIEW MORE]</h6>

             </div>
         </div>

         <div className="LandingPage_main">
             <div className="landing_poster" >
               <img src="https://mobile.yoox.com/images/yoox80/banners/5569_17_splash_K.jpg?634485886601286852" />
             </div>
             <div className="name" >
                 <h3>KIDS</h3>
             </div>
             <div className="view" >
             {/* <a href="">[VIEW MORE]</a> */}
             <h6>[VIEW MORE]</h6>

             </div>
         </div>

         <div className="LandingPage_main">
             <div className="landing_poster" >
               <img src="https://mobile.yoox.com/images/yoox80/banners/5569_15_splash_D.jpg?634485886601286852" />
             </div>
             <div className="name" >
                 <h3>WOMEN</h3>
             </div>
             <div className="view" >
             {/* <a href="">[VIEW MORE]</a> */}
             <h6>[VIEW MORE]</h6>

             </div>
         </div>

        </div>
        </div>
        
    )
}