import { useDispatch } from "react-redux"
import { searchedProductsChanged } from '../states/product/productSlice'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'

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


    return (<Box
        position={'fixed'}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            zIndex: 1,
            top: 90
        }}>
        <Paper
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: 300,
                m: 0
            }}>
            <SearchIcon sx={{ p: '8px', color: '#e91e63' }} />
            <InputBase placeholder="Search..." onChange={inputChanged} />
        </Paper>
    </Box>
    )
}