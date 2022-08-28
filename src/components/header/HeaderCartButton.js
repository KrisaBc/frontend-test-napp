import { useCartTotalProducts } from '../../states/cart/hooks'
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HeaderCartButton() {
    const totalProductsinCart = useCartTotalProducts()

    return <IconButton
        size="large"
        aria-label="show total product in cart"
        color="inherit"
    >
        <Badge badgeContent={totalProductsinCart} color="error">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
}