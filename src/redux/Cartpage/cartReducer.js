import {CartData} from "./action"
const initalState = { Cartdata:[],cartSum:0}
export const cartReducer = (state=initalState,{type,payload}) => {
    switch (type) {
        case CartData:
            return {
                
                ...state, Cartdata
                    : [...payload]
             
            };
        case "CL":
            return {
                ...state, Cartdata: [...state.Cartdata]
            };
        case "CartSum":
            return {
                ...state, cartSum: payload
            };
        default:
            return state;
    }

}