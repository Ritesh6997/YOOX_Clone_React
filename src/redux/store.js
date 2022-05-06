import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer";
import { isAuthreducer } from "./isAuth/isAuthReducer";
import { cartReducer } from "./Cartpage/cartReducer";
import {wishlistReducer } from "./wishlistpage/wishlistReducer";
const rootReducer = combineReducers({
  product: productReducer,
  isAuth: isAuthreducer,
  cart: cartReducer,
  wishlist:wishlistReducer,

});

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));
