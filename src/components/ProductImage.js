import { useProductDetail } from "../states/product/hooks"
import Box from '@mui/material/Box';

export function ProductImage() {
    const productDetail = useProductDetail()

    const productImage = productDetail.imgUrl

    return <Box
        component="img"
        sx={{ width: 250, margin: 'auto', p: 2 }}
        alt={productDetail.brand} src={productImage}
    />
}


{/* <Image component="img"
        image={productImage}
        alt={productDetail.brand}
        sx={{ width: 200, margin: 'auto', p: 2 }}>
    </Image> */}

