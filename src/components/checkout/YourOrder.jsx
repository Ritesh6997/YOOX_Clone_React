import { useEffect, useState } from "react";

export const Order = ()=>{

    const items = [
        {
            name: "BRIAN DALES",
            type: "Casual pants",
            initialPrice: "261.00",
            finalPrice:"135.00" ,
            color:["#5a5c35"] ,
            colorName:"Military green",
            size:["30","32"],
            category: ["men","Pant"],
            img : ["https://www.yoox.com/images/items/13/13760125MK_14_f.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/13/13760125MK_14_r.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/13/13760125MK_14_d.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/13/13760125MK_14_a.jpg?impolicy=crop&width=387&height=490"]
        },
        {
            name: "DANIELE ALESSANDRINI",
            type: "Dress pants",
            initialPrice: "311.00",
            finalPrice:"210.00" ,
            color:["#15134e"] ,
            colorName:"Black",
            size:["30","32"],
            category: ["men","Pant"],
            img : ["https://www.yoox.com/images/items/36/36374923IB_14_f.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/36/36374923IB_14_f.jpg?impolicy=crop&width=387&height=490"]
         },
         {
            name: "BALENCIAGA",
            type: "Shirts",
            initialPrice: "1,098.00",
            finalPrice:"521.00" ,
            color:["#ffffff"] ,
            colorName:"White",
            size:["S","M","L","XL"],
            category: ["men","shirt"],
            img : ["https://www.yoox.com/images/items/12/12687626BO_14_f.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/12/12687626BO_14_r.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/12/12687626BO_14_r.jpg?impolicy=crop&width=387&height=490","https://www.yoox.com/images/items/12/12687626BO_14_r.jpg?impolicy=crop&width=387&height=490"]
        }

    ];

    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=>{

        let total = 0;
        items.map((e)=>{
            total = total+(+e.finalPrice)
   
            return total
           
       })

       setTotalPrice(total)
       
    },[])

   

    return(
        <div className="orderContainer">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div  className="checkoutHeading" style={{paddingTop:"40px"}}>Your order</div>
                <div style={{color:"rgb(102, 102, 102)", fontSize:"13px",paddingTop:"40px", marginTop:"7px", marginRight:"10px"}}>{items.length} items</div>
           </div>

           <div className="orderSubTitles">TOTAL FOR ITEMS</div>
           <div className="orderPrices">US$ {totalPrice}.00</div>

           <div className="orderSubTitles">SHIPPING</div>
           <div className="orderPrices">Express 3-6 business days</div>

           <div className="orderSubTitles">SHIPPING COSTS</div>
           <div className="orderPrices">US$ 26,00</div>

           <div className="orderSubTitles">LOCAL TAXES AND DUTIES</div>
           <div className="orderPrices">US$ 78,03</div>

           <div className="orderSubTitles">ORDER TOTAL</div>
           <span className="totalPrice">US$ {totalPrice+26+78},00</span>

           <hr style={{width:"275px"}} />

           <div className="orderSubTitles">YOU ARE PURCHASING:</div>

           <div style={{height:"350px",marginLeft:"30px", overflow:"scroll"}}>
           {items.map((e,id)=>(
               <div style={{display:"flex",marginTop:"30px"}}>
                   <div >
                       <img src={e.img} alt="" style={{width:"93px", marginTop:"-10px"}}/>
                   </div>
                   <div>
                       <div className="dressname">{e.name}</div>
                       <div className="dressdetails">{e.type}</div>
                       <div className="dressdetails">{e.colorName}</div>
                       <div className="dressdetails">{e.size[0]}(INT)</div>
                       <div className="dressdetails">Quantity: 1</div>
                       <div className="dressPrice">US$ {e.finalPrice}</div>
                   </div>
               </div>
           ))}
           </div>

           <hr />
        </div>
    )
}