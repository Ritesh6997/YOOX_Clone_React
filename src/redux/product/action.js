export const ADD_MEN_PRODUCT = "ADD_MEN_PRODUCT";
export const ADD_WOMEN_PRODUCT = "ADD_WOMEN_PRODUCT";
export const ADD_KIDS_PRODUCT = "ADD_KIDS_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SORT_PRODUCT = "SORT_PRODUCT";
import axios from "axios";
export const addProduct = (data) => {
  return { type:ADD_PRODUCT, payload: data};
};
export const sortProduct = (data) => {
  return { type:SORT_PRODUCT, payload: data};
};
export const getProduct = (val) => async (dispatch) => {
  axios.get(`https://young-thicket-70794.herokuapp.com/products/${val}`)
  .then(function (response) {
    // handle success
    // console.log(response.data);
    dispatch(addProduct(response.data))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

