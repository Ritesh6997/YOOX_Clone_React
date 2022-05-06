import { ADD_PRODUCT, SORT_PRODUCT } from "./action";

const init = {
  productData: [],
  womenProduct:[],
  menProduct:[],
  kidsProduct:[],
};
export const productReducer = (store = init, { type,payload }) => {

  switch (type) {
    case ADD_PRODUCT : return {...store,productData:[...payload]}
    case SORT_PRODUCT : return {...store,productData:[...store.productData].sort((a,b)=>{return (payload=="low"?(a.finalPrice-b.finalPrice):(b.finalPrice-a.finalPrice))})}
    default:
      return store;
  }
};
