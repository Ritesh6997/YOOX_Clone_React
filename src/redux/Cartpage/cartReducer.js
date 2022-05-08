import {CartData} from "./action"
const initalState = { Cartdata:[]}
export const cartReducer = (state=initalState,{type,payload}) => {
    switch (type) {
        case CartData:
            return {
                
                ...state, Cartdata
                    : [...payload]
             
            };
        case "CL":
            return {
                ...state,Cartdata:[...state.Cartdata]
            }
        default:
            return state;
    }

}