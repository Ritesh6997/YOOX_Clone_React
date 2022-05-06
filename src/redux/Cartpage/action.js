export const CartData = "CartData";
export const CartDataAction = (value) => {
   return {
        type: CartData,
        payload:value, 
    }
}

export const getCartData = () => async () => {
    const res = await fetch("");
    const Cartdata = await res.json();
    // dispatch(Cartdata);
}