export const SHIPPING = "SHIPPING"

export const shippingAddress = (data)=>{

    return{
        type : SHIPPING,
        payload : data
    }
}