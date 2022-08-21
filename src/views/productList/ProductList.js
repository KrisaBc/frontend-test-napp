import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../states/product/productSlice'
import { useProducts, useProductsLoading } from '../../states/product/hooks'
import { Item, InputSearch } from '../../components'

export function ProductList() {
    const dispatch = useDispatch()
    const products = useProducts()
    const isLoading = useProductsLoading()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return <div>
        <InputSearch />

        {isLoading ? <p>Loading...</p> : <ul> {
            products.map(item => <li key={item.id}>
                <Item item={item} />
            </li>)}
        </ul>}
    </div>
}

