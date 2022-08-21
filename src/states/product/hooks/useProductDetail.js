import { useSelector } from "react-redux";

export const useProductDetail = () => {
    return useSelector(state => { return state.product.productDetail })
}