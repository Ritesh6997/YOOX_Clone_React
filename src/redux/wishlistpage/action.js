export const WishlistData = "WishlistData";
export const WishlistDataAction = (wishlistData) => {
   return {
        type: WishlistData,
        payload:wishlistData, 
    }
}

export const getWishlistData = () => async () => {
    const res = await fetch("");
    const wishlistData = await res.json();
    // dispatch(wishlistData);
}