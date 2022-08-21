import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductImage } from "../../components"
import { useProductDetail, useProductDetailLoading } from "../../states/product/hooks"
import { getProductById } from "../../states/product/productSlice"

export function ProductDetails() {
    const dispatch = useDispatch()
    const productDetail = useProductDetail()
    const isProductDetailLoading = useProductDetailLoading()

    const { id: productId } = useParams()

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    return <>
        {isProductDetailLoading ? <p>Loading...</p> : <div>
            <ProductImage />
            Details
        </div>
        }
    </>
}
