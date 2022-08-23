import { ProductActionsSelector } from "./ProductActionsSelector"
import { useProductDetail, useProductDetailLoading } from "../states/product/hooks"

export function ProductActions() {
    const productDetail = useProductDetail()
    const { options } = productDetail || {}
    const { colors, storages } = options || {}

    return <form>
        <ProductActionsSelector option={colors} name='colors'/>
        <ProductActionsSelector option={storages} name='colors'/>
        <button type='submit'>Add To Cart</button>
    </form>
}