import { useSelector } from "react-redux";

export const useProductsLoading = () => {
    return useSelector(state => { return state.product.isLoading })
}