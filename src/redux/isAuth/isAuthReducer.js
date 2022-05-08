import { IsAuth } from "./action";

const initalState = { IsAuth: false };
export const isAuthreducer = (state=initalState,{type}) => {
     switch (type) {
         case IsAuth:
             return {
                 ...state, IsAuth
                     : (!state.IsAuth)
             };
         default:
             return state;
    };
}