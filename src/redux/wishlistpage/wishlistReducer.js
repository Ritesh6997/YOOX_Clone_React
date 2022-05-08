import {WishlistData} from "./action"
const initalState = { wishlistData: [] }
export const wishlistReducer = (store=initalState,{type,payload}) => {
    switch (type) {
        case WishlistData:
            return {
                
                ...store, wishlistData
                    : [...payload]
             
            };
        default:
            return store;
    }

}