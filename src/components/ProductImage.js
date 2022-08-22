import { useProductDetail } from "../states/product/hooks"

export function ProductImage() {
    const productDetail = useProductDetail()

    const productImage = productDetail?.imgUrl 

    return <img src={productImage} alt='Produc Img' />
}