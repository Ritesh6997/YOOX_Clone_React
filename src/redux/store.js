import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer";
import { ShippingReducer } from "./checkout/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  shippingAddress : ShippingReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
