import { useSelector } from "react-redux";

export const useProductsLoading = () => {
    return useSelector(state => state.product.isProductsLoading)
}