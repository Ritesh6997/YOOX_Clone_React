import { ADD_PRODUCT } from "./action";

const init = {
  productData: [],
  womenProduct:[],
  menProduct:[],
  kidsProduct:[],
};
export const productReducer = (store = init, { type,payload }) => {

  switch (type) {
    case ADD_PRODUCT : return {...store,productData:[...payload]}
    default:
      return store;
  }
};
