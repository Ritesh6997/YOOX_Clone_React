import { IsAuth } from "./action";

const initalState = { IsAuth: false };
export const isAuthreducer = (state=initalState,{type,payload}) => {
     switch (type) {
         case IsAuth:
             return {
                 ...state, IsAuth
                     : payload
             };
         default:
             return state;
    };
}