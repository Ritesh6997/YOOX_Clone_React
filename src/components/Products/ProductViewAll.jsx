import { useSelector } from "react-redux"






export const ProductViewAll = () => {
    const ProductData = useSelector((store)=> {return store.product.productData})
    console.log('ProductData:', ProductData)
    return (<div className="all-product">
        {ProductData.map((e) => {
            return (<div key ={e.id}>{e.name }</div>)
             })}
             </div>)
}