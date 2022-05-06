import WishlistData from "./action"
const initalState=[]
export const cartReducer = (state=initalState,{type,payload}) => {
    switch (type) {
        case WishlistData:
            return {
                
                ...state, wishlistData
                    : [...state.wishlistData,...payload]
             
            };
        default:
            return state;
    }

}