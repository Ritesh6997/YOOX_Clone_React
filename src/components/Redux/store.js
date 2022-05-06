import { legacy_createStore } from "redux";
import { isAuthreducer } from "./isAuthReducer";
export const Store = legacy_createStore(isAuthreducer);
Store.subscribe(() => {
    console.log("subscribe:", Store.getState());
});