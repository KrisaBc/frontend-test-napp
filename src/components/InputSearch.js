import { useDispatch } from "react-redux"
import { searchedProductsChanged } from '../states/product/productSlice'
import { Paper, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { displayCenter, pink, inputBox } from "../styles/styles";

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

    return <Box position={'fixed'} sx={inputBox}>
        <Paper sx={displayCenter}>
            <SearchIcon sx={{ p: '8px', color: pink }} />
            <InputBase placeholder="Search..." onChange={inputChanged} />
        </Paper>
    </Box>
}