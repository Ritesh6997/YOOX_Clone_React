import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer";

const rootReducer = combineReducers({
  product: productReducer,

});

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));
