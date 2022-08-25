import { useSelector } from "react-redux";

export const useCartTotalProductsLoading = () => {
    return useSelector(state => { return state.cart.iscartTotalProductsLoading })
}