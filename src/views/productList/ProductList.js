import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../states/product/productSlice'
import { useProducts, useProductsLoading, useSearchedProducts } from '../../states/product/hooks'
import { ListProductItem, InputSearch } from '../../components'
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';

export function ProductList() {
    const dispatch = useDispatch()
    const products = useProducts()
    const isLoading = useProductsLoading()
    const searchedProducts = useSearchedProducts()

    useEffect(() => {
        dispatch(getProducts())
    }, [searchedProducts])

    return <Container sx={{ mt: 20 }}>
        <InputSearch />

        {isLoading ?
            <Box
                display="flex"
                justifyContent="center"
                alignItems='space-between'
                pt={10}
            >
                <CircularProgress />
            </Box> :
            <Grid container
                columns={{ xs: 4, sm: 9, md: 12 }} spacing={1}
            >
                {products.map(product => <Grid xs={4} sm={3} md={3}
                    display="flex"
                    justifyContent="center"
                    alignItems='space-between'
                    item key={product.id}
                >
                    <ListProductItem product={product} />
                </Grid>)}
            </Grid>
        }
    </Container>
}

