export  const ADD_MEN_PRODUCT="ADD_MEN_PRODUCT"
export  const ADD_WOMEN_PRODUCT="ADD_WOMEN_PRODUCT"
export  const ADD_KIDS_PRODUCT="ADD_KIDS_PRODUCT"
export const ADD_PRODUCT = "ADD_PRODUCT"

export const addProduct = (data) => {
    return {type:ADD_PRODUCT,payload:data}
}