import { useSelector } from "react-redux";

export const useSearchedProducts = () => {
    return useSelector(state => state.product.searchedProducts)
}