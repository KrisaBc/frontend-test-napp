import { useSelector } from "react-redux";

export const useProductDetailLoading = () => {
   return useSelector(state => { return state.product.isProductDetailLoading })
}