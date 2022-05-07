import { CheckoutFooter } from './CheckoutFooter'
import { CheckoutNavbar } from './CheckoutNavbar'
import { EmailBox } from './EmailBox'
import { FAQ } from './faq'
import { Container3 } from './paymentAndReview'
import { ShippingForm } from './ShippingForm'
import { Order } from './YourOrder'
export const Checkout = ()=>{
    return(
        
        <div>

            <div>
                <CheckoutNavbar />
            </div>
            <div className='container'>
               <div className='main'>
                   <EmailBox />
                   <ShippingForm />
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