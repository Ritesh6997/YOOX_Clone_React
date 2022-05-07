import { SHIPPING } from "./action";

let init = {shippingAddress:[]}

export const ShippingReducer = (store=init,action)=>{

    switch(action.type){
        case SHIPPING:
            return {...store, shippingAddress:action.payload};
        
            default:
                return store
    }
}