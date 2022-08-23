import { ProductActionsSelector } from "./ProductActionsSelector"
import { useProductDetail, useProductDetailLoading } from "../states/product/hooks"

export function ProductActions() {
    const productDetail = useProductDetail()
    const { options } = productDetail || {}
    const { colors, storages } = options || {}

    const addProductToCart = event => {
        event.preventDefault()
        
        
    }

    return <div>
        <h2>Select the color and storages</h2>
        <form onSubmit={addProductToCart}>
            <ProductActionsSelector option={colors} name='colors' />
            <ProductActionsSelector option={storages} name='storages' />
            <input type='submit' value='Add To Cart'/>
        </form>
    </div>
}