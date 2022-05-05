import { ADD_PRODUCT } from "./action";

const init = {
  productData: [],
  womenProduct:[],
  menProduct:[],
  kidsProduct:[],
};
export const productReducer = (store = init, { type, playload }) => {
  switch (type) {
    case ADD_PRODUCT: return {...store,productData:[...playload]}
    default:
      return store;
  }
};
