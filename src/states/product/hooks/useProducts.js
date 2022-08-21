import { useSelector } from "react-redux";

export const useProducts = () => {
    return useSelector(state => { return state.product.products })
}