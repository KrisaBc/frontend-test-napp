import { useNavigate } from 'react-router-dom'

export function Item({ item }) {
    const navigate = useNavigate()

    const goToProductDetail = (id) => {

        navigate(`/product:${id}`)
    }

    return <div onClick={() => goToProductDetail(item.id)}>
        <img src={item.imgUrl} alt='Product Image' />
        <span>{item.brand}</span>
        <span>{item.model}</span>
        <span>{item.price}</span>
    </div>
}