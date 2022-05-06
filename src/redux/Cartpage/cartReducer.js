import {CartData} from "./action"
const initalState = { Cartdata:[]}
export const cartReducer = (state=initalState,{type,payload}) => {
    switch (type) {
        case CartData:
            return {
                
                ...state, Cartdata
                    : [...state.Cartdata,...payload]
             
            };
        default:
            return state;
    }

}