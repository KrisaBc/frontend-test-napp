import { useSelector } from "react-redux";

export const useProductDetail = () => {
    return useSelector(state => state.product.productDetail)
}