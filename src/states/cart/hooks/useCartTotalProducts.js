import { useSelector } from "react-redux";

export const useCartTotalProducts = () => {
    return useSelector(state => { return state.cart.cartTotalProducts })
}