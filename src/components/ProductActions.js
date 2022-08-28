import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductActionsSelector } from "./ProductActionsSelector"
import { useProductDetail } from "../states/product/hooks"
import { sendProductsToCart } from "../states/cart/cartSlice"
import { Container, Button, Box, Typography } from "@mui/material"
import { pink, font, displayDirection, submitButton } from "../styles/styles"

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

    return <Container sx={displayDirection('column')}>
        <Typography variant="h3" sx={font(pink, 16)} pt={2}>
            Customize your product:
        </Typography>
        <form onSubmit={handleAddProductToCart}>
            <Box sx={displayDirection('row', 200)} m={2}>
                <ProductActionsSelector option={colors} optionName='colors' />
                <ProductActionsSelector option={storages} optionName='storages' />
            </Box>
            <Box sx={displayDirection('row', 200)} m={2}>
                <Button variant="contained"  type='submit' sx={submitButton}>Add To Cart</Button>
            </Box>
        </form>
    </Container>
}