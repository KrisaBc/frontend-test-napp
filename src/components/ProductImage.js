import { useProductDetail, useProductDetailLoading, useProductId } from "../states/product/hooks"

export function ProductImage() {
    const productDetail = useProductDetail()

    const productImage = productDetail?.imgUrl ?? null

    return <img src={productImage} alt='Produc Img' />
}