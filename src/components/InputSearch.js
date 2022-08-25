import { useDispatch } from "react-redux"
import { searchedProductsChanged } from '../states/product/productSlice'

export function InputSearch() {
    const dispatch = useDispatch()

    const inputChanged = event => {
        const newInput = event.target.value

        if (newInput.trim().length !== 0) {
            dispatch(searchedProductsChanged(newInput))
        } else {
            dispatch(searchedProductsChanged(''))
        }
    }

    return <input type='text' placeholder='Search' onChange={inputChanged} />
}