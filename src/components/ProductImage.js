import { useProductDetail } from "../states/product/hooks"
import Box from '@mui/material/Box';
import { image } from '../styles/styles'

export function ProductImage() {
    const productDetail = useProductDetail()
    const productImage = productDetail.imgUrl

    return <Box
        component="img"
        sx={image(200)}
        alt={productDetail.brand} src={productImage}
    />
}

