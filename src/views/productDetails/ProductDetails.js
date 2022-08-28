import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductDescription, ProductImage, ProductActions } from "../../components"
import { useProductDetailLoading, useProductDetail } from "../../states/product/hooks"
import { getProductById } from "../../states/product/productSlice"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {
    Container, Box, CircularProgress,
    Grid, Card, Divider, Typography, IconButton
} from '@mui/material'
import { displayCenter, displayDirection, font, pink } from '../../styles/styles'


export function ProductDetails() {
    const dispatch = useDispatch()
    const productDetail = useProductDetail()
    const isProductDetailLoading = useProductDetailLoading()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return <Container sx={displayCenter}>
        <Card sx={{ p: 5, maxWidth: 820, mt: 10 }} >
            <IconButton>
                <ArrowBackIosNewOutlinedIcon sx={{ color: pink }} />
            </IconButton>

            {isProductDetailLoading ?
                <Box sx={displayCenter} pt={10} >
                    <CircularProgress />
                </Box>
                :
                productDetail ?
                    <Grid container columns={{ xs: 4, md: 12 }} spacing={1} >
                        <Grid item xs={4} md={4} sx={displayCenter} >
                            <ProductImage />
                        </Grid>
                        <Grid item xs={4} md={8} sx={displayDirection('column')}>
                            <ProductDescription />
                            <Divider variant="middle" />
                            <ProductActions />
                        </Grid>
                    </Grid>
                    :
                    <Typography variant="h3" sx={font(pink, 16)} pt={2}>
                        It seems the product is not more disponible in our stock, please try with other product
                    </Typography>
            }
        </Card>
    </Container>
}


