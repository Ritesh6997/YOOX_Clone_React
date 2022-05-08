export const CartData = "CartData";
export const CartDataAction = (value) => {
   return {
        type: CartData,
        payload:value, 
    }
}
const useridData = JSON.parse(localStorage.getItem("userIdyoox"));
export const getCartData = ()=> async (dispatch) => {
    console.log("1234cart");
    const res = await fetch(`https://yooxapi.herokuapp.com/cartData/${useridData}`);
    const Cartdata = await res.json();
    console.log(Cartdata.CartData);
   dispatch(CartDataAction(Cartdata.CartData));
}