export const WishlistData = "WishlistData";
export const WishlistDataAction = (value) => {
   return {
        type: WishlistData,
        payload:value, 
    }
}
const useridData = JSON.parse(localStorage.getItem("userIdyoox"));
export const getWishlistData = () => async (dispatch) => {
    console.log("1234wishlist");
    const res = await fetch(`https://yooxapi.herokuapp.com/wishlistData/${useridData}`);
    const wishlistData1 = await res.json();
    console.log(wishlistData1.wishlistData);
    dispatch(WishlistDataAction(wishlistData1.wishlistData));
}
