import { useSelector } from "react-redux";

export const useProducts = () => {
    return useSelector(state => {
        const products = state.product.products

        const searchedProducts = state.product.searchedProducts

        if (searchedProducts.length >= 1) {
            const filterProducts = products.filter(product => {
                const { brand, model } = product
                const matchWithBrand = brand.toLowerCase().indexOf(searchedProducts.toLowerCase()) !== -1
                const matchWithModel = model.toLowerCase().indexOf(searchedProducts.toLowerCase()) !== -1

                return (matchWithBrand || matchWithModel)
            })

            return filterProducts
        }
        else {
            return products
        }
    })
}