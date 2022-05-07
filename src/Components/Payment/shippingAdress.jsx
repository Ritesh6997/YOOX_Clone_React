import { useSelector } from "react-redux"

export const ShippingAddressBox = ()=>{

    const shippingDetails = useSelector((store)=>store.shippingAddress.shippingAddress)
    return(
        <div className="shippingBox">
            <div style={{display:"flex"}}>
                    <img style={{width:"25px", height:"25px", marginRight:"15px"}} src="https://www.linkpicture.com/q/checkicon.png" alt="" />
                    <div  className="checkoutHeading">Shipping</div>
            </div>

            <div className="shippingSubTitles" style={{marginBottom:"10px"}}>RECIPIENT</div>

            <div className="shippingSubTitles">{shippingDetails.FirstName} {shippingDetails.LastName} C/O {shippingDetails.CO}</div>
            <div style={{fontSize:"13px"}}>{shippingDetails.StreetName} - {shippingDetails.ZipCode} - {shippingDetails.City} {`(${shippingDetails.State})`}</div>
            <div style={{marginBottom:"20px", fontSize:"13px"}}>{shippingDetails.PhoneNumber}</div>

            <div className="shippingSubTitles">SHIPPING METHOD</div>
            <div style={{fontSize:"13px"}}>Express - 3-6 business days</div>
        </div>
    )
}