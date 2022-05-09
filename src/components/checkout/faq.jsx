import { useState } from "react"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const FAQ = ()=>{

    const [open,setOpen] = useState({
        q1 : false,
        q2 : false,
        q3 : false,
        q4 : false,
        q5 : false
    })




    return(
        <div className="FaqContainer">
            <div className="checkoutHeading">Frequently Asked Questions</div>

            <div>
                <div className="ques" onClick={()=>{setOpen({q1:!open.q1})}}>
                  <p>CAN I DECIDE AT WHAT TIME I WANT THE PACKAGE DELIVERED?</p>
                  {open.q1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>

                <p className="ans">{open.q1 ? "It is not possible to request a specific time or day for the delivery your order. The courier delivers Monday though Friday during working hours. We suggest you indicate the address where it is easiest for you to be present during the day. We cannot modify your shipping address after the order has been completed.": ""}</p>
            </div>

            <hr />

            <div>
                <div className="ques" onClick={()=>{setOpen({q2:!open.q2})}}>
                  <p>WHAT HAPPENS IF I AM NOT THERE TO ACCEPT THE DELIVERY?</p>
                  {open.q2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>

                <p className="ans">{open.q2 ? "The courier will try to deliver the package for three consecutive working days, leaving a note and their contact number. After three delivery attempts the order will be sent back to our warehouse.": ""}</p>
            </div>

            <hr />

            <div>
                <div className="ques" onClick={()=>{setOpen({q3:!open.q3})}}>
                  <p>HOW DO I CHANGE THE DELEIVERT COUNTRY?</p>
                  {open.q3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>

                <p className="ans">{open.q3 ? "The order must be placed from the site of the Country where you want to ship the package. If you do not want to ship to the Country indicated on this page, you need to exit the Shopping Bag and select a different Country.": ""}</p>
            </div>

            <hr />

            <div>
                <div className="ques" onClick={()=>{setOpen({q4:!open.q4})}}>
                  <p>DO I HAVE TO PAY ANYTHING AT DELIVERY?</p>
                  {open.q4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>

                <p className="ans">{open.q4 ? "You may need to pay import duties or local taxes according to your Country's policies. If YOOX is able to calculate these fees, they will be indicated with your order total and you will pay them at Checkout. For Countries where this service is not available, import fees will be requested at delivery.": ""}</p>
            </div>

            <hr />
            
            <div>
                <div className="ques" onClick={()=>{setOpen({q5:!open.q5})}}>
                  <p>DO I RECEIVE AN INVOICE FOR MY ORDER?</p>
                  {open.q5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>

                <p className="ans">{open.q5 ? "For every order you will receive the invoice by e-mail, when the package is shipped. If you want to enter specific billing details deflag the checkbox The Billing Address is the same as the Shipping Address found on this page.": ""}</p>
            </div>

            <hr />
        </div>
    )
}