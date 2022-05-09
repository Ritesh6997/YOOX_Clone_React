import { useSelector } from "react-redux"
import { EmailBox } from "../checkout/EmailBox"
import { FAQ } from "../checkout/faq"
import { Container3 } from "../checkout/paymentAndReview"
import { PaymentForm } from "./PaymentForm"
import { ShippingAddressBox } from "./shippingAdress"
import { Order } from "../checkout/YourOrder"
import '../checkout/checkout.css'

export const PaymentPage = ()=>{

    const shippingDetails = useSelector((store)=>store.shippingAddress.shippingAddress)

    console.log(shippingDetails)
    return(
        <div>
            

            <div className='container'>
               <div className='main'>
                   <EmailBox />
                   <ShippingAddressBox />
                   <PaymentForm />
                   <Container3 />
               </div>

               <div className='main2'>
                   <Order />
                </div>
          </div>

          <div style={{backgroundColor:"white"}}>
              <FAQ />
          </div>

          
        </div>
    )
}