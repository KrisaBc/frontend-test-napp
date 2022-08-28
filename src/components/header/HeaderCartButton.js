import { useCartTotalProducts } from '../../states/cart/hooks'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HeaderCartButton() {
    const totalProductsinCart = useCartTotalProducts()

    return (<IconButton
        size="large"
        aria-label="show total product in cart"
        color="inherit"
    >
        <Badge badgeContent={totalProductsinCart} color="error">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
    )
}