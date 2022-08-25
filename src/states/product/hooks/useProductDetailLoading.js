import { useSelector } from "react-redux";

export const useProductDetailLoading = () => {
   return useSelector(state => state.product.isProductDetailLoading )
}