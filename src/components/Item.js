import { useNavigate } from 'react-router-dom'

export function Item({ item }) {
    const navigate = useNavigate()

    const goToProductDetail = () => {

        navigate(`/product/${item.id}`)
    }

    return <div onClick={goToProductDetail}>
        <img src={item.imgUrl} alt='Product Image' />
        <span>{item.brand}</span>
        <span>{item.model}</span>
        <span>{item.price}</span>
    </div>
}