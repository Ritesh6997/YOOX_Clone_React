// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import React, { useCallback, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useNavigate } from "react-router-dom";
// import { Alert } from '@mui/material'
import ReactJsAlert from "reactjs-alert";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

export const PaymentForm = ()=>{

  const navigate = useNavigate()
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });


    setStatus(true);
            setType("success");
            setTitle("Thank you for purchase!");
    

    
  }, [makeShot]);

 



    return(
        <div className="shippingBox">
            <div className="checkoutHeading">Payment</div>

            <div className="shippingSubTitles">Select payment method</div>

            <div style={{display:"flex", justifyContent:"space-between",marginTop:"25px"}}>
                <div className="shippingSubTitles"><input type="radio" name="" id="" />Credit Card</div>
                <div style={{display:"flex"}}>
                    <img className="creditCardImages" src="https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Visa.png" alt="" />
                    <img className="creditCardImages" src="https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_mastercard.png" alt="" />
                    <img className="creditCardImages" src="https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_amex.png" alt="" />
                    <img className="creditCardImages" src="https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_JCB.png" alt="" />
                </div>

                <div className="shippingSubTitles">Free</div>
            </div>

            <div style={{fontSize:"13px", marginTop:"20px"}}>Enter payment details</div>

            <div>
                <form action="" >
                <input className='input' placeholder="CARD NUMBER" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />

               

  
    <div style={{marginTop:"25px"}}>
       <div style={{fontSize:"13px"}}>Enter expiration date</div>

      {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="demo-simple-select-filled-label">MONTH</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
         
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value="jan">JANUARY</MenuItem>
          <MenuItem value="feb">FEBRUARY</MenuItem>
          <MenuItem value="mar">MARCH</MenuItem>
          <MenuItem value="apr">APRIL</MenuItem>
          <MenuItem value="may">MAY</MenuItem>
          <MenuItem value="june">JUNE</MenuItem>
          <MenuItem value="july">JULY</MenuItem>
          <MenuItem value="aug">AUGUST</MenuItem>
          <MenuItem value="sep">SEPTEMBER</MenuItem>
          <MenuItem value="oct">OCTOBER</MenuItem>
          <MenuItem value="nov">NOVEMBER</MenuItem>
          <MenuItem value="dec">DECEMBER</MenuItem>
        </Select>
      </FormControl> 

      <FormControl variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="demo-simple-select-filled-label">YEAR</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
         
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2025">2025</MenuItem>
          <MenuItem value="2026">2026</MenuItem>
          <MenuItem value="2027">2027</MenuItem>
          <MenuItem value="2028">2028</MenuItem>
          <MenuItem value="2029">2029</MenuItem>
          <MenuItem value="sep">2030</MenuItem>
          <MenuItem value="2031">2031</MenuItem>
          <MenuItem value="2032">2032</MenuItem>
          <MenuItem value="2033">2033</MenuItem>
        </Select>
      </FormControl>  */}

      <select name="" id="" className='input' style={{width:"260px"}}>
          <option value="#">MONTH</option>
          <option value="jan">JANUARY</option>
          <option value="feb">FEBRUARY</option>
          <option value="mar">MARCH</option>
          <option value="apr">APRIL</option>
          <option value="may">MAY</option>
          <option value="june">JUNE</option>
          <option value="july">JULY</option>
          <option value="aug">AUGUST</option>
          <option value="sep">SEPTEMBER</option>
          <option value="oct">OCTOBER</option>
          <option value="nov">NOVEMBER</option>
          <option value="dec">DECEMBER</option>
      </select>
      <select name="" id="" className='input' style={{width:"260px", marginLeft:"40px"}}>
          <option value="##">YEAR</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="sep">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
          <option value="2033">2033</option>
      </select>
    </div>

    <div style={{fontSize:"13px", marginTop:"20px"}}>Enter card holder details</div>

    {/* <TextField id="filled-basic" label="FIRST NAME" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required />
    <TextField id="filled-basic" label="LAST NAME" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />
    <TextField id="filled-basic" label="ADDRESS" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required />
    <TextField id="filled-basic" label="CITY" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />
    <TextField id="filled-basic" label="ZIP CODE" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required />
    <TextField id="filled-basic" label="STATE/PROVINCE" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />
    <TextField id="filled-basic" label="COUNTRY" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br /> */}

    <input className='input' placeholder="FIRST NAME"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required />
    <input className='input' placeholder="LAST NAME"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />
    <input className='input' placeholder="ADDRESS"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required />
    <input className='input' placeholder="CITY"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />
    <input className='input' placeholder="ZIP CODE"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required />
    <input className='input' placeholder="STATE/PROVINCE"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />
    <input className='input' placeholder="COUNTRY"  style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}}  required /> <br />

    <div style={{marginTop:"20px", display:"flex"}}>
                <input type="checkbox" name="" id="" className="largerCheckbox" required />
                <label htmlFor="" style={{fontSize:"13px", color:"#666666",margin:"0px 0px 0px 5px", fontWeight:"500"}}>Save this address in MYOOX</label>
                </div>

                <div style={{marginTop:"20px", display:"flex"}}>
                <input type="checkbox" name="" id="" className="largerCheckbox" required/>
                <label htmlFor="" style={{fontSize:"13px", color:"#666666",margin:"0px 0px 0px 5px", fontWeight:"500"}}>Set as default</label>
                </div>
                    <input type='submit' onClick={fire} className='button'value="SHIP TO THIS ADDRESS" />


                </form>
            </div>

            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />

            <ReactJsAlert
          status={status} // true or false
          type={type} // success, warning, error, info
          title={title}
          quotes={true}
          quote=" Your order has been received and Your order ID is: 1234567890"
          Close={() => navigate("/")}
        />
            
        </div>
    )
}



