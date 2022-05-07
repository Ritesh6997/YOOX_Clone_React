import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { shippingAddress } from '../../redux/checkout/action';
import { useNavigate } from "react-router-dom";

export const ShippingForm = ()=>{ 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [shippingDetails,setShippingDetails] = useState({
            FirstName:"",
            LastName:"",
            CO:"",
            PhoneNumber :"",
            StreetName : "",
            ZipCode: "",
            City : "",
            State:"",
            Country:""
    })

    const handlechange = (e)=>{
        const {name,value} = e.target

        setShippingDetails({
            ...shippingDetails,
            [name] : value
        });
    }

    const handlesubmit = (e)=>{
        e.preventDefault();

        // console.log(shippingDetails)

        // fetch('http://localhost:5000/shipping', {
        //     method: 'POST', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(
        //         {
        //             FirstName : shippingDetails.FirstName,
        //             LastName : shippingDetails.LastName,
        //             CO : shippingDetails.CO,
        //             PhoneNumber : shippingDetails.PhoneNumber,
        //             StreetName : shippingDetails.StreetName,
        //             ZipCode : shippingDetails.ZipCode,
        //             City : shippingDetails.City,
        //             State_Province : shippingDetails.State,                                                                                                                                                                                                                                                                                                                                                                                                                                                            State : {type:String, required:true},
        //             Country: shippingDetails.Country 
        //         }
        //     ),
        //     })

            dispatch(shippingAddress(shippingDetails))
            navigate("/payment")

    }
   
    return(
        <div className='Shipping-box'>
                <div  className="checkoutHeading">Shipping</div>
                <div style={{fontSize:"13px", color:"333333"}}>
                Enter shipping details</div>

               <div >
               
               <form onSubmit={handlesubmit}>
               <TextField id="filled-basic" label="FIRST NAME" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}} name="FirstName" onChange={handlechange} required />
               <TextField id="filled-basic" label="LAST NAME" variant="filled" style={{marginTop:"20px",width:"270px"}} name="LastName" onChange={handlechange} required/> <br />
               <TextField id="filled-basic" label="C/O" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}} name="CO" onChange={handlechange} required />
               <TextField id="filled-basic" label="TELEPHONE" variant="filled" type="number" style={{marginTop:"20px",width:"270px"}} name="PhoneNumber" onChange={handlechange} required /> <br />
               <TextField id="filled-basic" label="STREET NAME AND NUMBER" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}} name="StreetName" onChange={handlechange} required  />
               <TextField id="filled-basic" label="ZIP CODE" variant="filled" type="number" style={{marginTop:"20px",width:"270px"}} name="ZipCode" onChange={handlechange} required /> <br />
               <TextField id="filled-basic" label="CITY" variant="filled" style={{marginRight:"30px", border:"none", marginTop:"20px", width:"270px"}} name="City" onChange={handlechange} required/> 
               <TextField id="filled-basic" label="STATE/PROVINCE" variant="filled" style={{marginTop:"20px",width:"270px"}} name="State" onChange={handlechange} required/> <br />
               <TextField id="filled-basic" label="COUNTRY" variant="filled" style={{marginTop:"20px",width:"270px"}} name="Country" onChange={handlechange} required /> <br />
                <div style={{marginTop:"20px", display:"flex"}}>
                <input type="checkbox" name="" id="" className="largerCheckbox" required />
                <label htmlFor="" style={{fontSize:"13px", color:"#666666", marginTop:"5px", fontWeight:"500"}}>Save this address in MYOOX</label>
                </div>

                <div style={{marginTop:"20px", display:"flex"}}>
                <input type="checkbox" name="" id="" className="largerCheckbox" required/>
                <label htmlFor="" style={{fontSize:"13px", color:"#666666", marginTop:"5px", fontWeight:"500"}}>Set as default</label>
                </div>
                    <input type='submit' className='button'value="SHIP TO THIS ADDRESS"  />
                
                </form>



               </div>

               
                
            </div>
    )
}