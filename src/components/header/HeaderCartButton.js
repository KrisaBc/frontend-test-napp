import {useCartTotalProducts} from '../../states/cart/hooks'

export default function HeaderCartButton() {
    const totalProductsinCart = useCartTotalProducts()
    
    return <div>
        <p>cart</p>
        <p>{totalProductsinCart}</p>
    </div>
}