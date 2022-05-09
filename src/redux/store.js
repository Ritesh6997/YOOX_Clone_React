import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer";
import { isAuthreducer } from "./isAuth/isAuthReducer";
import { cartReducer } from "./Cartpage/cartReducer";
import {wishlistReducer } from "./wishlistpage/wishlistReducer";
import { ShippingReducer } from "./checkout/reducer";
const rootReducer = combineReducers({
  product: productReducer,
  isAuth: isAuthreducer,
  cart: cartReducer,
  wishlist:wishlistReducer,
  shippingAddress : ShippingReducer

});


const Middleware1 = (store) => (next) => (action) => {
  if (typeof (action) === "function") {
    console.log(action);
    return action(store.dispatch);
  }
  next(action)
}
export const store = legacy_createStore(rootReducer, applyMiddleware(Middleware1, thunk));
console.log(store.getState());
