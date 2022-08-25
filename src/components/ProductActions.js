import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductActionsSelector } from "./ProductActionsSelector"
import { useProductDetail } from "../states/product/hooks"
import { sendProductsToCart } from "../states/cart/cartSlice"

export function ProductActions() {
    const dispatch = useDispatch()
    const productDetail = useProductDetail()
    const { options: { colors, storages } } = productDetail || {}

    const { id } = useParams()

    const handleAddProductToCart = event => {
        event.preventDefault()

        const { target: { colors: { value: colorCode }, storages: { value: storageCode } } } = event
        
        dispatch(sendProductsToCart({ id, colorCode, storageCode }))
    }

    return <div>
        <h2>Select the color and storages</h2>
        <form onSubmit={handleAddProductToCart}>
            <ProductActionsSelector option={colors} name='colors' />
            <ProductActionsSelector option={storages} name='storages' />
            <input type='submit' value='Add To Cart' />
        </form>
    </div>
}