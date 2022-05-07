import { useSelector } from "react-redux"
import { CheckoutFooter } from "../CheckOut/CheckoutFooter"
import { CheckoutNavbar } from "../CheckOut/CheckoutNavbar"
import { EmailBox } from "../CheckOut/EmailBox"
import { FAQ } from "../CheckOut/faq"
import { Container3 } from "../CheckOut/paymentAndReview"
import { PaymentForm } from "./PaymentForm"
import { ShippingAddressBox } from "./shippingAdress"
import { Order } from "../CheckOut/YourOrder"

export const PaymentPage = ()=>{

    const shippingDetails = useSelector((store)=>store.shippingAddress.shippingAddress)

    console.log(shippingDetails)
    return(
        <div>
            <div>
                <CheckoutNavbar />
            </div>

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

          <div>
              <FAQ />
          </div>

          <div>
              <CheckoutFooter />
          </div>
        </div>
    )
}