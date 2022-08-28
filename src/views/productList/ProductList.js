import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../states/product/productSlice'
import { useProducts, useProductsLoading } from '../../states/product/hooks'
import { ListProductItem, InputSearch } from '../../components'
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Box, CircularProgress } from '@mui/material'
import { displayCenter } from '../../styles/styles'

export function ProductList() {
    const dispatch = useDispatch()
    const products = useProducts()
    const isLoading = useProductsLoading()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return <Container sx={{ mt: 20 }}>
        <InputSearch />

        {isLoading ?
            <Box sx={displayCenter} pt={5}>
                <CircularProgress />
            </Box> :
            <Grid container columns={{ xs: 4, sm: 9, md: 12 }} spacing={1}>
                {products.map(product => <Grid xs={4} sm={3} md={3}
                    sx={displayCenter}
                    item key={product.id}
                >
                    <ListProductItem product={product} />
                </Grid>)}
            </Grid>
        }
    </Container>
}

