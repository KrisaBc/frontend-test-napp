import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductDescription, ProductImage, ProductActions } from "../../components"
import { useProductDetailLoading } from "../../states/product/hooks"
import { getProductById } from "../../states/product/productSlice"

export function ProductDetails() {
    const dispatch = useDispatch()
    const isProductDetailLoading = useProductDetailLoading()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return <>
        {isProductDetailLoading ? <p>Loading...</p> : <div>
            <ProductImage />
            <ProductDescription />
            <ProductActions />
        </div>
        }
    </>
}
