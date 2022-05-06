export const CartData = "CartData";
export const CartDataAction = (Cartdata) => {
   return {
        type: CartData,
        payload:Cartdata, 
    }
}

export const getCartData = () => async () => {
    const res = await fetch("");
    const CartData = await res.json();
    // dispatch(CartData);
}