import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductDescription, ProductImage, ProductActions } from "../../components"
import { useProductDetailLoading } from "../../states/product/hooks"
import { getProductById } from "../../states/product/productSlice"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';


export function ProductDetails() {
    const dispatch = useDispatch()
    const isProductDetailLoading = useProductDetailLoading()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return <Container sx={{ mt: 15 }}>
        <Card>
            {isProductDetailLoading ?
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems='space-between'
                    pt={10} >
                    <CircularProgress />
                </Box>
                :
                <Grid
                    container
                    columns={{ xs: 4, md: 12 }}
                    spacing={1}>
                    <Grid xs={4} md={5}>
                        <ProductImage />
                    </Grid>
                    <Grid xs={4} md={7}>
                        <ProductDescription />
                        <Divider variant="middle" />
                        <ProductActions />
                    </Grid>
                </Grid>
            }
        </Card>
    </Container>
}


